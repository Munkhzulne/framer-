import { Fade } from '@material-ui/core';
import React, { FC, useState } from 'react';
import { Border, Text } from '../basic';
import { Overlay } from '../layout';
import { Button } from './button';
import { ButtonType } from './button.d';

export const AsyncButton: FC<ButtonType> = (props) => {
    const { onClick } = props;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>();

    const click = async () => {
        setLoading(true);
        try {
            onClick && (await onClick());
        } catch (e) {
            setError(e.message);
            setTimeout(() => {
                setError(null);
            }, 4000);
        }
        setLoading(false);
    };

    return (
        <Border>
            <Button {...props} loading={loading} onClick={click} />
            <Fade in={!!error}>
                <Overlay top={4}>
                    <Text role="error" type="tertiary1">
                        {error}
                    </Text>
                </Overlay>
            </Fade>
        </Border>
    );
};
