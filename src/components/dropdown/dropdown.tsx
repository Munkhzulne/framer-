import React, {
    createContext,
    ReactNode,
    useContext,
    useRef,
    useState,
} from 'react';
import { AnimatedToggleView } from '../animation';
import { Border, Shadow } from '../basic';
import { Overlay, Padding } from '../layout';
import { useOutsideClick } from '../utility';

const DropDownContext = createContext<{
    visible: boolean;
    setVisible: (visible: boolean) => void;
}>({
    visible: false,
    setVisible: () => {},
});

export const DropDown = {
    Provider: ({ children }: { children: ReactNode }) => {
        const [visible, setVisible] = useState<boolean>(false);
        const element = useRef();
        useOutsideClick(element, () => {
            setVisible(false);
        });
        return (
            <div
                ref={element}
                style={{
                    position: 'relative',
                    cursor: 'pointer',
                    height: '100%',
                }}
            >
                <DropDownContext.Provider value={{ visible, setVisible }}>
                    {children}
                </DropDownContext.Provider>
            </div>
        );
    },
    Content: ({
        children,
        width = '100%',
        closeOnSelect = true,
    }: DimensionType & { children: ReactNode; closeOnSelect?: boolean }) => {
        const { visible, setVisible } = useContext(DropDownContext);

        return (
            <div
                onClick={() => closeOnSelect && setVisible(false)}
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    zIndex: visible ? 99 : -1,
                }}
            >
                <AnimatedToggleView visible={visible}>
                    {visible && (
                        <Overlay
                            top={3}
                            visible={visible}
                            zIndex={99}
                            right={0}
                        >
                            <Shadow>
                                <Border radius="medium" width="100%">
                                    <Padding
                                        width={width}
                                        backgroundRole="light"
                                        maxHeight={'30vh'}
                                    >
                                        {children}
                                    </Padding>
                                </Border>
                            </Shadow>
                        </Overlay>
                    )}
                </AnimatedToggleView>
            </div>
        );
    },
    Trigger: ({ children }: { children: ReactNode }) => {
        const { visible, setVisible } = useContext(DropDownContext);
        return (
            <div
                style={{
                    height: '100%',
                }}
                onClick={() => setVisible(!visible)}
            >
                {children}
            </div>
        );
    },
};
