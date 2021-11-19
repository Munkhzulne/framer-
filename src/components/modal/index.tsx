import React, { createContext, useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import { Border, Text } from '../basic';
import { Center, Overlay, Padding } from '../layout';
import { useOutsideClick } from '../utility';

const Background = styled.div<any>`
    height: 100%;
    width: 100%;
    position: fixed;
    background-color: rgb(0, 0, 0, 0.45);
    top: 0;
    left: 0;
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    z-index: ${({ visible }: any) => (visible ? 99 : -99)};
    transition: all 0.25s;
`;

export const ModalContext = createContext({
    visible: false,
    setVisible: (visible: boolean) => {},
});

export const Modal = {
    Provider: ({ children }) => {
        const [visible, setVisible] = useState<boolean>(false);
        return (
            <ModalContext.Provider value={{ visible, setVisible }}>
                {children}
            </ModalContext.Provider>
        );
    },
    Content: ({ children }) => {
        const { visible, setVisible } = useContext(ModalContext);
        const contentRef = useRef();
        useOutsideClick(contentRef, () => setVisible(false));
        return (
            visible && (
                <Background visible={visible}>
                    <Center height="100%">
                        <Padding height="100%" width="80vw">
                            <Center height="100%">
                                <Border
                                    borderSize={[0]}
                                    radius="large"
                                    backgroundRole="light"
                                    ref={contentRef}
                                    data-test="modal-window"
                                >
                                    <Overlay
                                        zIndex={1}
                                        top={5}
                                        right={5}
                                        onClick={() => {
                                            setVisible(false);
                                        }}
                                    >
                                        <Text interactive type="heading2">
                                            x
                                        </Text>
                                    </Overlay>
                                    {children}
                                </Border>
                            </Center>
                        </Padding>
                    </Center>
                </Background>
            )
        );
    },
    Trigger: ({ children }) => {
        const { visible, setVisible } = useContext(ModalContext);
        return (
            <div
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                {children}
            </div>
        );
    },
};
