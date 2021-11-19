import React, {
    useEffect,
    useRef,
    useContext,
    useLayoutEffect,
    useCallback,
} from 'react';
import { useFirebase, useModifyTemplate } from '../../..';
import { InfoIcon, RedoIcon, UndoIcon } from '../../../assets';
import {
    Center,
    Padding,
    Queue,
    Button,
    Text,
} from '../../../components';
import { NotificationContext } from '../../../notifications';
import { FabricContext } from '../../fabric/fabric-provider';

export const Test = () => {
    const { storage } = useFirebase();
    const { useAsyncNotification } = useContext(NotificationContext);
    const { updateTemplateDoc } = useModifyTemplate();
    const canvasEl = useRef(null);
    const fileInput = useRef();
    const canvasElParent = useRef<HTMLDivElement>(null);
    const {
        canvas,
        initCanvas,
        setActiveObject,
        undo,
        redo,
        playVideo,
        stopVideo,
    } = useContext(FabricContext);

    const updateActiveObject = useCallback(
        (e) => {
            if (!e) {
                return;
            }
            setActiveObject(canvas.getActiveObject());
            canvas.renderAll();
        },
        [canvas, setActiveObject]
    );

    useEffect(() => {
        if (!canvas) {
            return;
        }
        canvas.on('selection:created', updateActiveObject);
        canvas.on('selection:updated', updateActiveObject);
        canvas.on('selection:cleared', updateActiveObject);

        return () => {
            canvas.off('selection:created');
            canvas.off('selection:cleared');
            canvas.off('selection:updated');
        };
    }, [canvas, updateActiveObject]);
    useLayoutEffect(() => {
        initCanvas(canvasEl.current, canvasElParent);
    }, [canvasEl, initCanvas]);

    const clearCanvas = () => {
        canvas.clear();
    };
    const addBaseVideo = (e) => {
        const file = e.target.files[0];
        if (file) {
            const a = useAsyncNotification('Uploaded photo', async () => {
                let thisRef = storage.child(file.name + Date.now().toString());
                await thisRef.put(file).then((snapshot) => {
                    snapshot.ref.getDownloadURL().then((downloadURL) => {
                        updateTemplateDoc({
                            baseAsset: downloadURL,
                            typeFile: file.type,
                        });
                    });
                });
            });
            a();
            document.getElementById('myVideo').value = null;
        }
    };
    const removeActiveObject = () => {
        canvas.getActiveObjects().forEach((obj) => {
            canvas.remove(obj);
        });
        canvas.discardActiveObject().renderAll();
    };

    return (
        <Padding size={[6, 6, 7, 6]} height="100%">
            <Padding size={[0, 0, 3, 0]}>
                <Queue justifyContent="space-between">
                    <Queue size={2}>
                        <Button onClick={undo} leftIcon={<UndoIcon />}>
                            <Text role="light">Undo</Text>
                        </Button>
                        <Button onClick={redo} rightIcon={<RedoIcon />}>
                            <Text role="light">Redo</Text>
                        </Button>
                    </Queue>
                    <Center>
                        <Queue size={2}>
                            <Button onClick={playVideo}>
                                <Text role="light">Play</Text>
                            </Button>
                            <Button onClick={stopVideo}>
                                <Text role="light">Stop</Text>
                            </Button>
                        </Queue>
                    </Center>
                    <Queue size={2}>
                        <input
                            id="myVideo"
                            accept="video/mp4,video/x-m4v,video/*"
                            ref={fileInput}
                            multiple
                            onChange={addBaseVideo}
                            style={{ display: 'none' }}
                            type="file"
                        />
                        <label htmlFor="myVideo">
                            <Button>
                                <Text role="light">Add base video</Text>
                            </Button>
                        </label>
                        <Button onClick={clearCanvas}>
                            <Text role="light">Clear all</Text>
                        </Button>
                    </Queue>
                </Queue>
            </Padding>
            <Center>
                <video id="video" style={{ display: 'none' }}></video>
                <div
                    ref={canvasElParent}
                    style={{
                        height: '864px',
                        width: '864px',
                        backgroundColor: '#EEEEF6',
                    }}
                >
                    <canvas ref={canvasEl}></canvas>
                </div>
            </Center>
        </Padding>
    );
};
