import React, { useContext } from 'react';
import { Border, Padding, Stack, Text } from '../../../components';
import { FabricContext } from '../fabric-provider';
export const FabricTexts = () => {
    const { addText } = useContext(FabricContext);
    const addTextToCanvas = (type) => {
        let config = {
            width: 150,
            top: 10,
            left: 10,
            fontSize: 24,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textAlign: 'center',
            fontFamily: 'arial',
            textDecoration: 'normal',
            fill: '#000000',
        };
        switch (type) {
            case 'Heading':
                config = { ...config, fontSize: 36 };
                break;
            case 'Subheading':
                config = { ...config, fontSize: 24 };
                break;
            case 'Body text':
                config = { ...config, fontSize: 16 };
                break;

            default:
                break;
        }
        addText({ text: type, config });
    };
    return (
        <Padding size={5}>
            <Stack size={5}>
                <Text role="light" type="primary3">
                    Click text to add to page
                </Text>
                <Border
                    backgroundColor="editorTextBg"
                    radius="large"
                    onClick={() => addTextToCanvas('Heading')}
                >
                    <Padding size={3}>
                        <Text role="light" type="big3">
                            Heading
                        </Text>
                    </Padding>
                </Border>
                <Border
                    backgroundColor="editorTextBg"
                    radius="large"
                    onClick={() => addTextToCanvas('Subheading')}
                >
                    <Padding size={3}>
                        <Text role="light" type="heading1">
                            Subheading
                        </Text>
                    </Padding>
                </Border>
                <Border
                    backgroundColor="editorTextBg"
                    radius="large"
                    onClick={() => addTextToCanvas('Body text')}
                >
                    <Padding size={3}>
                        <Text role="light" type="primary2">
                            Add a body
                        </Text>
                    </Padding>
                </Border>
            </Stack>
        </Padding>
    );
};
