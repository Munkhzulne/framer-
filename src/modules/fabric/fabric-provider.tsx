import React, {
    useCallback,
    createContext,
    useState,
    useContext,
    useEffect,
} from 'react';
import { fabric } from 'fabric';
import { ModifyTemplateContext } from '..';
import {
    canvasValues,
    elementProps,
    supportedImageTypes,
} from './default-configs';
import _ from 'lodash';
import { avatars, flowers, mails, socials, travels } from '../../assets/shapes';
import { LINE, PATH } from './elements/default-shapes';
fabric.CustomVideo = fabric.util.createClass(fabric.Image, {
    type: 'customvideo',
    cropRect: null,

    initialize: function (video, options) {
        const defaultOpts = {
            lockRotation: true,
            objectCaching: true,
            cacheProperties: ['time'],
        };
        options = options || {};

        this.callSuper(
            'initialize',
            video,
            Object.assign({}, defaultOpts, options)
        );
    },
    _draw: function (video, ctx, w, h) {
        const c = this.cropRect;
        const d = {
            x: -this.width / 2,
            y: -this.height / 2,
            w: this.width,
            h: this.height,
        };
        if (c) {
            ctx.drawImage(video, c.x, c.y, c.w, c.h, d.x, d.y, d.w, d.h);
        } else {
            ctx.drawImage(video, d.x, d.y, d.w, d.h);
        }
    },

    _render: function (ctx) {
        this._draw(this.getElement(), ctx);
    },
});
import 'fabric-history';
fabric.CustomVideo = fabric.util.createClass(fabric.Image, {
    type: 'customvideo',
    cropRect: null,

    initialize: function (video, options) {
        const defaultOpts = {
            lockRotation: true,
            objectCaching: true,
            cacheProperties: ['time'],
        };
        options = options || {};

        this.callSuper(
            'initialize',
            video,
            Object.assign({}, defaultOpts, options)
        );
    },
    _draw: function (video, ctx, w, h) {
        const c = this.cropRect;
        const d = {
            x: -this.width / 2,
            y: -this.height / 2,
            w: this.width,
            h: this.height,
        };
        if (c) {
            ctx.drawImage(video, c.x, c.y, c.w, c.h, d.x, d.y, d.w, d.h);
        } else {
            ctx.drawImage(video, d.x, d.y, d.w, d.h);
        }
    },

    _render: function (ctx) {
        this._draw(this.getElement(), ctx);
    },
});
export const FabricContext = createContext({
    canvas: fabric.Canvas,
    initCanvas: (el, canvasElParent) => {},
    activeObject: null,
    setActiveObject: (data: any) => {},
    saveCanvasData: async () => {},
    addBasicShape: ({
        type,
        config,
    }: {
        type: 'Circle' | 'Rect' | 'Triangle';
        config: {};
    }) => {},
    addLine: ({ points, config }) => {},
    addHeart: ({ points, config }) => {},
    addText: ({ text, config }) => {},
    addSvgElement: (svg, config) => {},
    addSystemImage: (data) => {},
    undo: () => {},
    redo: () => {},
    playVideo: () => {},
    stopVideo: () => {},
});

export const FabricContextProvider = ({ children }) => {
    const { updateTemplateDoc, templateData } = useContext(
        ModifyTemplateContext
    );
    const [canvas, setCanvas] = useState(null);
    const [baseVideo, setBaseVideo] = useState(null);
    const [baseVideoEl, setBaseVideoEl] = useState(null);
    const [activeObject, setActiveObject] = useState(null);
    const initCanvas = useCallback((el, canvasElParent) => {
        let c = new fabric.Canvas(el);
        const setCurrentDimensions = () => {
            c.setHeight(canvasElParent.current?.clientHeight || 0);
            c.setWidth(canvasElParent.current?.clientWidth || 0);
            c.renderAll();
            setCanvas(c);
        };
        const resizeCanvas = () => {
            setCurrentDimensions();
        };
        setCurrentDimensions();

        window.addEventListener('resize', resizeCanvas, false);

        return () => {
            c.dispose();
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    const undo = () => {
        if (canvas) {
            canvas.undo();
        }
    };
    const redo = () => {
        if (canvas) {
            canvas.redo();
        }
    };
    const addBasicShape = ({ type, config }) => {
        console.log(type);
        const object = new fabric[type]({
            ...config,
            perPixelTargetFind: true,
        });
        canvas.add(object);
        canvas.setActiveObject(object);
        canvas.renderAll();
        return;
    };
    const addLine = ({ points, config }) => {
        const object = new fabric.Line(points, {
            ...config,
        });
        canvas.add(object);
        canvas.setActiveObject(object);
        return;
    };
    const addHeart = ({ points, config }) => {
        const object = new fabric.Path(points, {
            ...config,
            name: 'heart',
            perPixelTargetFind: true,
        });
        canvas.add(object);

        canvas.setActiveObject(object);
        return;
    };

    const addVideo = (url) => {
        let v = document.getElementById('video');
        v.src = url;
        v.controls = true;
        v.muted = true;
        setBaseVideoEl(v);
        const vid = new fabric.CustomVideo(v, {
            left: 0,
            top: 0,
            width: 864,
            height: 864,
            selectable: false,
        });
        canvas.insertAt(vid, 0);

        setBaseVideo(vid);

        vid.getElement().addEventListener('play', playTrigger, false);
        vid.getElement().play();
        function playTrigger() {
            if (v.paused || v.ended) return false;
            vid.set('time', v.currentTime);
            canvas.renderAll();
            setTimeout(playTrigger, 20);
        }
    };

    const playVideo = () => {
        if (baseVideo) {
            baseVideo.getElement().play();
        }
    };
    const stopVideo = () => {
        if (baseVideo) {
            baseVideo.getElement().pause();
        }
    };
    const addSvgElement = (svg, config) => {
        fabric.loadSVGFromString(svg, function (objects, options) {
            var obj = fabric.util.groupSVGElements(objects, {
                options,
                ...config,
                perPixelTargetFind: true,
            });
            canvas.add(obj);
            canvas.bringToFront(obj);
            canvas.setActiveObject(obj);
        });
        canvas.renderAll();
        return;
    };
    const addSystemImage = (file) => {
        if (supportedImageTypes.indexOf(file.typeFile) !== -1) {
            fabric.Image.fromURL(
                file.src,
                function (img) {
                    img.scaleToWidth(100);
                    canvas.add(img);
                    canvas.setActiveObject(img);
                },
                { name: file.typeFile }
            );
        } else if (file.typeFile === 'image/svg+xml') {
            fabric.loadSVGFromURL(file.src, function (objects, options) {
                let svg = fabric.util.groupSVGElements(objects, {
                    options,
                    name: file.typeFile,
                });
                svg.scaleToWidth(100);
                canvas.add(svg);

                canvas.setActiveObject(svg);
            });
        }
        return;
    };
    const addSystemSvg = (el) => {
        let svg = _.split(el.name, '-');
        let type = svg[0];
        let key = svg[1];
        switch (type) {
            case 'flower':
                addSvgElement(
                    _.toString(flowers[_.toInteger(key)].svgString),
                    el
                );
                break;
            case 'avatar':
                addSvgElement(avatars[_.toInteger(key)].svgString, el);
                break;
            case 'travel':
                addSvgElement(travels[_.toInteger(key)].svgString, el);
                break;
            case 'social':
                addSvgElement(socials[_.toInteger(key)].svgString, el);
                break;
            case 'mail':
                addSvgElement(mails[_.toInteger(key)].svgString, el);
                break;
            default:
                break;
        }
        return;
    };
    const addText = ({ text, config }) => {
        const object = new fabric.Textbox(text, {
            ...config,
        });
        canvas.add(object);
        canvas.setActiveObject(object);
    };

    const saveCanvasData = async () => {
        if (canvas) {
            const canvasData = canvas.toJSON([...canvasValues]);
            console.log(canvasData);
            const processedCanvasData = _.map(canvasData?.objects, (o) =>
                _.pick(o, [...elementProps])
            );
            console.log(processedCanvasData);
            await updateTemplateDoc({ elements: processedCanvasData });
        }
    };
    const addImage = (file, key) => {
        if (supportedImageTypes.indexOf(file.name) !== -1) {
            fabric.Image.fromURL(
                file.src,
                async (img) => {
                    canvas.insertAt(img, key);
                },
                { ...file }
            );
            return;
        } else if (file.typeFile === 'image/svg+xml') {
            fabric.loadSVGFromURL(file.src, function (objects, options) {
                let svg = fabric.util.groupSVGElements(objects, {
                    options,
                    ...file,
                });
                canvas.add(svg);
                canvas.setActiveObject(svg);
            });
        }
    };
    useEffect(() => {
        let { elements, baseAsset } = templateData || {};
        if (canvas && elements) {
            canvas.clear();
            elements.forEach(async (el, key) => {
                switch (el?.type) {
                    case 'group':
                        addSystemSvg(_.omit(el, ['width', 'height']));
                        break;
                    case 'line':
                        addLine({
                            points: LINE.points,
                            config: el,
                        });
                        break;
                    case 'path':
                        addHeart({
                            points: PATH.points,
                            config: el,
                        });
                        break;
                    case 'textbox':
                        addText({
                            text: el.text,
                            config: _.omit(el, 'text'),
                        });
                        break;
                    case 'image':
                        addImage(el, key);
                        break;
                    case 'customvideo':
                        break;
                    default:
                        addBasicShape({
                            type: _.upperFirst(el.type),
                            config: el,
                        });
                        break;
                }
            });
        }

        if (baseAsset) {
            addVideo(baseAsset);
        }
    }, [templateData]);
    return (
        <FabricContext.Provider
            value={{
                canvas,
                initCanvas,
                activeObject,
                setActiveObject,
                saveCanvasData,
                addBasicShape,
                addSvgElement,
                addHeart,
                addLine,
                addText,
                addSystemImage,
                undo,
                redo,
                playVideo,
                stopVideo,
            }}
        >
            {children}
        </FabricContext.Provider>
    );
};
