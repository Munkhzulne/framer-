import { useField } from 'formik';
import React, { FC, useState } from 'react';
import zxcvbn from 'zxcvbn';
import { ProgressBar, ProgressBarRole, Text } from '../basic';
import { Stack } from '../layout';
import { FormInput } from './form-input';
import { InputProps } from './input';

const mapScoreToProgressBarRole: { [key: number]: ProgressBarRole } = {
    0: 'error',
    4: 'success',
};
const ToggleType = ({ onClick, visible }) => {
    return (
        <Text type="primary3" role="primary" onClick={onClick}>
            {visible ? 'Show' : 'Hide'}
        </Text>
    );
};
export const PasswordInput: FC<InputProps & { showIndicator?: boolean }> = (
    props
) => {
    const { showIndicator = false, ...rest } = props;

    const [visible, setVisible] = useState(false);

    const toggleShow = () => {
        setVisible(!visible);
    };

    const [, meta] = useField(rest);

    let { value } = meta;
    let { score } = zxcvbn(value || '');

    return (
        <Stack size={4}>
            <FormInput
                {...props}
                type={visible ? 'text' : 'password'}
                rightIcon={
                    <ToggleType visible={visible} onClick={toggleShow} />
                }
            />
            {showIndicator && (
                <ProgressBar
                    role={mapScoreToProgressBarRole[score] || 'active'}
                    progress={!!value ? (score + 1) * 20 : 0}
                />
            )}
        </Stack>
    );
};
