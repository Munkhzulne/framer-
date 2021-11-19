import React, { FC, ReactNode, useState } from 'react';
import { AnimatedToggleView } from '../animation';
import { Border } from '../basic';
import { Button } from '../button';
import { Overlay, Padding, Stack } from '../layout';

type DropdownPillType = {
    label: string;
    children: ReactNode;
    width?: number | string;
    paddingSize?: number[];
};

export const PillDropdown: FC<DropdownPillType> = (props) => {
    const { label, children, width, paddingSize } = props;
    const [clicked, setClicked] = useState(true);
    return (
        <Stack>
            <Button role="secondary" onClick={() => setClicked(!clicked)}>
                {label}
            </Button>
            <AnimatedToggleView visible={clicked}>
                {clicked && (
                    <Overlay backgroundRole="light">
                        <Border
                            borderSize={[2]}
                            role="secondary"
                            radius="small"
                        >
                            <Padding
                                width={width || '100%'}
                                size={paddingSize || [4]}
                            >
                                {children}
                            </Padding>
                        </Border>
                    </Overlay>
                )}
            </AnimatedToggleView>
        </Stack>
    );
};
