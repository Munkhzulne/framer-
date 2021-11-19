import React from 'react';
import { CheckMarkIcon, CheckMarkIconFull } from '../../assets';
import { Border } from '../basic';
import { Center, Padding, Queue, Stack } from '../layout';

export const Checkbox = (props) => {
    const { active, onClick, children, type, label } = props;

    if (type === 'secondary') {
        return (
            <Queue size={children ? 4 : 0} onClick={onClick}>
                <Border borderSize={[1]} role="secondary">
                    <Padding size={[2, 1]} backgroundRole="light">
                        <Center>
                            <CheckMarkIconFull
                                height={10}
                                width={12}
                                role={active ? 'secondary' : 'light'}
                            />
                        </Center>
                    </Padding>
                </Border>
                {children && <Stack>{children}</Stack>}
            </Queue>
        );
    }
    return (
        <Queue size={label ? 4 : 0} onClick={onClick}>
            <Border borderSize={[2]} radius={'medium'} role="secondary">
                <Padding size={[1, 2]}>
                    <Center>
                        <CheckMarkIcon
                            role={active ? 'secondary' : 'light'}
                            height={16}
                            width={16}
                        />
                    </Center>
                </Padding>
            </Border>
            {label && <Stack>{label}</Stack>}
        </Queue>
    );
};
