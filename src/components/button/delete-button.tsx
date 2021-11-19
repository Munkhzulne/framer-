import React from 'react';
import { CrossIcon } from '../../assets/icons/cross-icon';
import { Border } from '../basic';
import { Center } from '../layout';

export const DeleteButton = (props) => {
    return (
        <Border
            {...props}
            height={5}
            width={5}
            backgroundRole="tertiary"
            radius="circle"
            hoverRole="primary"
        >
            <Center height="100%">
                <CrossIcon />
            </Center>
        </Border>
    );
};
