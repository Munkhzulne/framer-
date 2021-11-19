import React, { FC } from 'react';
import { CheckMarkIcon, CloseIcon } from '../../assets';
import { Border, Box } from '../basic';
import { Center, Padding, Queue } from '../layout';

export const SelectablePill: FC<{
    selected: boolean;
    onClick: () => void;
}> = (props) => {
    const { children, selected, onClick } = props;
    return (
        <div
            style={{ display: 'inline-block', cursor: 'pointer' }}
            onClick={onClick}
        >
            <Border borderSize={[1]} role="primary" radius="small">
                <Padding size={[1, 3]}>
                    <Queue size={2}>
                        <Border
                            borderSize={[1]}
                            role="primary"
                            radius="small"
                            animationDelay={0.2}
                            backgroundRole={(selected && 'primary') || null}
                        >
                            <Box width={4} ratio={1}>
                                <Center height="100%">
                                    {selected ? (
                                        <CheckMarkIcon
                                            height={10}
                                            width={10}
                                            role="light"
                                        />
                                    ) : (
                                        <CloseIcon
                                            height={10}
                                            width={10}
                                            role="primary"
                                        />
                                    )}
                                </Center>
                            </Box>
                        </Border>
                        <div>{children}</div>
                    </Queue>
                </Padding>
            </Border>
        </div>
    );
};
