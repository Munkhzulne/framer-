import { Link, navigate } from 'gatsby';
import React, { useContext, useState, useEffect } from 'react';
import { Box, Center, Stack, Text } from '../../../..';
import {
    AlignBottomIcon,
    AlignCenterHIcon,
    AlignCenterVIcon,
    AlignLeftIcon,
    AlignRightIcon,
    AlignTopIcon,
} from '../../../../assets';
import {
    Border,
    Button,
    FormInput,
    Grid,
    Input,
    InteractiveIcon,
    Overlay,
    Padding,
    Queue,
    Spacer,
} from '../../../../components';
import { AsyncButton } from '../../../../components/button/async-button';
import {
    getActiveStyle,
    setActiveProp,
    setActiveStyle,
} from '../../../fabric/utils';
import { FabricContext } from '../../../fabric/fabric-provider';
import { EditableSlider } from '../../../../components/form/editable-slider';
import _ from 'lodash';

export const BasicSettings = () => {
    const { canvas, activeObject } = useContext(
        FabricContext
    );

    let { type: activeObjectType } = activeObject || {};
    const [options, setOptions] = useState({
        strokeWidth: 1,
        stroke: '',
        opacity: 1,
        angle: 0,
        fill: '',
        skewX: 0,
        skewY: 0,
    });
    const updateStrokeWidth = (e) => {
        setOptions({
            ...options,
            strokeWidth: e,
        });
        setActiveStyle('strokeWidth', parseInt(e, 10), activeObject);
    };
    const updateStroke = (value) => {
        setOptions({
            ...options,
            stroke: value,
        });
        setActiveProp('stroke', value, activeObject);
    };
    const updateFill = (value) => {
        setOptions({
            ...options,
            fill: value,
        });
        setActiveProp('fill', value, activeObject);
    };
    const updateOpacity = (e, value) => {
        setOptions({
            ...options,
            opacity: _.isNumber(value) ? value : e.target.value,
        });
        setActiveProp(
            'opacity',
            _.isNumber(value) ? value : e.target.value,
            activeObject
        );
    };
    const updateAngle = (e, value) => {
        setOptions({
            ...options,
            angle: _.isNumber(value) ? value : e.target.value,
        });
        setActiveProp(
            'angle',
            _.isNumber(value) ? value : e.target.value,
            activeObject
        );
    };
    const updateSkewX = (e, value) => {
        setOptions({
            ...options,
            skewX: _.isNumber(value) ? value : e.target.value,
        });
        setActiveProp(
            'skewX',
            _.isNumber(value) ? value : e.target.value,
            activeObject
        );
    };
    const updateSkewY = (e, value) => {
        setOptions({
            ...options,
            skewY: _.isNumber(value) ? value : e.target.value,
        });
        setActiveProp(
            'skewY',
            _.isNumber(value) ? value : e.target.value,
            activeObject
        );
    };
    const positionElement = (alignment) => {
        switch (alignment) {
            case 'left':
                var left;
                if (activeObject.angle <= 90) {
                    left =
                        activeObject.aCoords.tl.x - activeObject.aCoords.bl.x;
                }
                if (activeObject.angle > 90 && activeObject.angle <= 180) {
                    left =
                        activeObject.aCoords.tl.x - activeObject.aCoords.br.x;
                }
                if (activeObject.angle > 180 && activeObject.angle <= 270) {
                    left =
                        activeObject.aCoords.tl.x - activeObject.aCoords.tr.x;
                }
                if (activeObject.angle > 270) {
                    left = 0;
                }
                setActiveProp('left', left, activeObject);
                break;
            case 'right':
                var left;
                if (activeObject.angle <= 90) {
                    left =
                        activeObject.aCoords.tl.x +
                        (canvas.width - activeObject.aCoords.tr.x);
                }
                if (activeObject.angle > 90 && activeObject.angle <= 180) {
                    left = canvas.width;
                }
                if (activeObject.angle > 180 && activeObject.angle <= 270) {
                    left =
                        activeObject.aCoords.tl.x +
                        (canvas.width - activeObject.aCoords.bl.x);
                }
                if (activeObject.angle > 270) {
                    left =
                        activeObject.aCoords.tl.x +
                        (canvas.width - activeObject.aCoords.br.x);
                }
                setActiveProp('left', left, activeObject);
                break;
            case 'top':
                var top;
                if (activeObject.angle <= 90) {
                    top = 0;
                }
                if (activeObject.angle > 90 && activeObject.angle <= 180) {
                    top = activeObject.aCoords.tl.y - activeObject.aCoords.bl.y;
                }
                if (activeObject.angle > 180 && activeObject.angle <= 270) {
                    top = activeObject.aCoords.tl.y - activeObject.aCoords.br.y;
                }
                if (activeObject.angle > 270) {
                    top = activeObject.aCoords.tl.y - activeObject.aCoords.tr.y;
                }
                setActiveProp('top', top, activeObject);
                break;
            case 'bottom':
                var top;
                if (activeObject.angle <= 90) {
                    top =
                        activeObject.aCoords.tl.y +
                        (canvas.height - activeObject.aCoords.br.y);
                }
                if (activeObject.angle > 90 && activeObject.angle <= 180) {
                    top =
                        activeObject.aCoords.tl.y +
                        (canvas.height - activeObject.aCoords.tr.y);
                }
                if (activeObject.angle > 180 && activeObject.angle <= 270) {
                    top = canvas.height;
                }
                if (activeObject.angle > 270) {
                    top =
                        activeObject.aCoords.tl.y +
                        (canvas.height - activeObject.aCoords.bl.y);
                }
                setActiveProp('top', top, activeObject);
                break;
            case 'centerH':
                activeObject.viewportCenterH();
                break;
            case 'centerV':
                activeObject.viewportCenterV();
                break;
            default:
                break;
        }
    };
    const bringToFront = () => {
        canvas.bringToFront(activeObject);
        canvas.renderAll();
    };
    const removeElement = () => {
        canvas.remove(activeObject);
        canvas.renderAll();
    };
    function dataURLtoBlob(dataurl) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    }
    useEffect(() => {
        if (activeObject) {
            const activeOptions = {
                stroke: getActiveStyle('stroke', activeObject),
                fill: getActiveStyle('fill', activeObject),
                strokeWidth: getActiveStyle('strokeWidth', activeObject),
                opacity: getActiveStyle('opacity', activeObject) || 1,
                angle: getActiveStyle('angle', activeObject) || 1,
                skewX: getActiveStyle('skewX', activeObject) || 1,
                skewY: getActiveStyle('skewY', activeObject) || 1,
            };
            setOptions({ ...options, ...activeOptions });
        }
    }, [activeObject]);
    return (
        <Stack size={5} width="100%">
            {!_.isEqual(activeObjectType, 'group') && (
                <>
                    {!_.isEqual(activeObjectType, 'image') && (
                        <Input
                            type="color"
                            label="Fill color"
                            value={options.fill}
                            onChange={updateFill}
                        />
                    )}

                    <Queue size={5}>
                        <Input
                            type="number"
                            min={1}
                            label="Stroke width"
                            name="strokeWidth"
                            value={options.strokeWidth}
                            onChange={updateStrokeWidth}
                        />
                        <Input
                            type="color"
                            label="Stroke color"
                            name="strokeWidth"
                            value={options.stroke}
                            onChange={updateStroke}
                        />
                    </Queue>
                </>
            )}
            <EditableSlider
                label="Opacity"
                max={1}
                min={0}
                step={0.1}
                value={options.opacity}
                onChange={updateOpacity}
            />
            <Text role="light" type="primary5">
                Align to page
            </Text>
            <Queue size={5}>
                <InteractiveIcon
                    onClick={() => {
                        positionElement('left');
                    }}
                >
                    <AlignLeftIcon />
                </InteractiveIcon>

                <InteractiveIcon
                    onClick={() => {
                        positionElement('right');
                    }}
                >
                    <AlignRightIcon />
                </InteractiveIcon>
                <InteractiveIcon
                    onClick={() => {
                        positionElement('centerH');
                    }}
                >
                    <AlignCenterHIcon />
                </InteractiveIcon>

                <InteractiveIcon
                    onClick={() => {
                        positionElement('centerV');
                    }}
                >
                    <AlignCenterVIcon />
                </InteractiveIcon>

                <InteractiveIcon
                    onClick={() => {
                        positionElement('top');
                    }}
                >
                    <AlignTopIcon />
                </InteractiveIcon>
                <InteractiveIcon
                    onClick={() => {
                        positionElement('bottom');
                    }}
                >
                    <AlignBottomIcon />
                </InteractiveIcon>
            </Queue>
            <EditableSlider
                label="Angle"
                name="angle"
                max={360}
                min={0}
                step={1}
                value={options.angle}
                onChange={updateAngle}
            />
            <EditableSlider
                label="Skew X"
                max={100}
                min={0}
                step={1}
                value={options.skewX}
                onChange={updateSkewX}
            />

            <EditableSlider
                label="Skew Y"
                max={100}
                min={0}
                step={1}
                value={options.skewY}
                onChange={updateSkewY}
            />
            <Button
                role="secondary"
                onClick={bringToFront}
                backgroundHoverColor="editorElement"
            >
                <Text role="light">Bring to front</Text>
            </Button>

            <Button
                role="secondary"
                onClick={removeElement}
                backgroundHoverColor="editorElement"
            >
                <Text role="light">Remove element</Text>
            </Button>
        </Stack>
    );
};
