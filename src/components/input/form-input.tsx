import { Field, useField } from 'formik';
import React, { ChangeEvent, FC } from 'react';
import styled from 'styled-components';
import { AnimatedFadeInView } from '../animation';
import { Text } from '../basic';
import { Border } from '../basic/border';
import { Overlay, Stack } from '../layout';
import { TextEntryStyle } from './input';

export type FormInputProps = {
    label?: string;
    name: string;
    value?: string;
    onKeyUp?: (event: ChangeEvent<HTMLInputElement>) => void;
};
const Input: FC<any> = (props) => {
    const [, meta] = useField(props);
    let { label } = props;
    let { error, touched } = meta;

    return (
        <Stack size={2} width="100%">
            <Text type="primary5">{label}</Text>
            <Border
                borderSize={[0, 0, 2, 0]}
                role={error ? 'error' : touched ? 'success' : 'primary'}
            >
                <Field {...props} error={meta?.error} />
            </Border>
            <AnimatedFadeInView height={4} visible={!!error}>
                <Overlay>
                    <Text role="error" type="tertiary1">
                        {error}
                    </Text>
                </Overlay>
            </AnimatedFadeInView>
        </Stack>
    );
};

export const FormInput: FC<any> = styled(Input)`
    ${TextEntryStyle}
    color: black;
`;
