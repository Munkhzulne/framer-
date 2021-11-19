import axios from 'axios';
import _ from 'lodash';
import React, { useContext, useEffect, useState } from 'react';
import { useTemplateApi } from '../../../api';
import { useQPay } from '../../../api/use-qpay';
import { AnimatedLogo } from '../../../assets';
import {
    Button,
    Center,
    Modal,
    Padding,
    Queue,
    Stack,
    Text,
} from '../../../components';
import { AsyncButton } from '../../../components/button/async-button';
import { NotificationContext } from '../../../notifications';
import { FabricContext } from '../../fabric/fabric-provider';
import { useModifyTemplate } from '../../providers';

export const SaveAndDownloadTemplate = () => {
    const { saveCanvasData, canvas } = useContext(FabricContext);
    const { templateId, templateData, updateTemplateDoc } = useModifyTemplate();
    const { useAsyncNotification } = useContext(NotificationContext);
    const [qrImage, setQrImage] = useState('');
    const { createPayment } = useQPay();
    const { baseAsset, payment } = templateData || {};

    const { processTemplateVideo, getTemplateVideo } = useTemplateApi();
    const showPayment = async () => {
        // await createPayment({ amount: 1000 }).then((res) => {
        //     console.log(res);
        //     setQrImage(res.qrImage);
        // });
    };
    const downloadTemplate = async () => {
        await updateTemplateDoc({ payment: 'done' });
        const a = canvas.toJSON([
            'lockMovementX',
            'lockMovementY',
            'lockRotation',
            'lockScalingX',
            'lockScalingY',
            'lockUniScaling',
            'hasBorders',
            'hasControls',
            'targetFindTolerance',
            'perPixelTargetFind',
            'selectable',
            'meta',
            'id',
            'prototype',
            'name',
            'type',
            'src',
        ]);
        const json = {
            ...a,
            objects: _.filter(a.objects, function (currentObject) {
                return currentObject.type !== 'customvideo';
            }),
        };
        processTemplateVideo({
            canvasJson: JSON.stringify(json),
            baseVideo: baseAsset || null,
        }).then(() => {
            axios({
                url: 'http://localhost:3000/getTemplate',
                method: 'GET',
                responseType: 'blob',
            }).then((response) => {
                const url = window.URL.createObjectURL(
                    new Blob([response.data])
                );
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'output.mp4');
                document.body.appendChild(link);
                link.click();
            });
        });
    };
    const updateCanvas = useAsyncNotification('Updated template', async () => {
        await saveCanvasData();
    });
    return (
        <Modal.Provider>
            <Queue size={6}>
                <AsyncButton
                    role="secondary"
                    type="secondary"
                    onClick={updateCanvas}
                >
                    <Text role="light">Save</Text>
                </AsyncButton>
                {payment ? (
                    <Button
                        role="secondary"
                        backgroundHoverColor="darkBlue"
                        onClick={downloadTemplate}
                    >
                        <Text role="light">Download</Text>
                    </Button>
                ) : (
                    <>
                        <Modal.Trigger>
                            <Button
                                role="secondary"
                                backgroundHoverColor="darkBlue"
                                onClick={showPayment}
                            >
                                <Text role="light">Download</Text>
                            </Button>
                        </Modal.Trigger>
                        <Modal.Content>
                            <Padding size={[8, 8, 6, 8]}>
                                <Stack size={6}>
                                    <Center>
                                        <img src="https://qpay.mn/q/?q=7729010217244435891117000373369754" />
                                    </Center>
                                    <Text
                                        type="primary3"
                                        role="primary"
                                        alignment="center"
                                    >
                                        You need to make payment to download
                                        template.
                                    </Text>
                                    <Button onClick={downloadTemplate}>
                                        Done
                                    </Button>
                                </Stack>
                            </Padding>
                        </Modal.Content>{' '}
                    </>
                )}
            </Queue>
        </Modal.Provider>
    );
};
