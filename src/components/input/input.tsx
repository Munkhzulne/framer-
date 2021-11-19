import { Field } from 'formik';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { Border, BorderStyle, Text, TextStyle } from '../basic';
import {
    BackgroundStyle,
    Center,
    DimensionStyle,
    Overlay,
    Stack,
} from '../layout';
import { InputProps } from './input.d';

export const TextEntryStyle = css`
    outline: none;
    width: 100%;
    transition: all 0.2s;
    color: white;
    ${TextStyle}
    ${BorderStyle}
    ${DimensionStyle}
    ${BackgroundStyle}
`;

export const RawInput = styled.input`
    ${TextEntryStyle}
`;

export const Input: FC<InputProps> = ({
    label,
    width,
    labelType,
    borderSize,
    rightIcon,
    onChange,
    ref,
    type,
    placeholder,
    value
}) => {
    const handleOnChange = ({ target: { value } }) =>
        onChange && onChange(value);

    return (
        <Stack size={type == 'color' ? 3 :2 } width={width || '100%'}>
            <Text type={labelType || 'primary5'} role="light">{label}</Text>
            <Border borderSize={borderSize || [0, 0, 1, 0]} role="secondary">
                <RawInput
                    ref={ref}
                    value= {value}
                    type={type}
                    placeholder={placeholder}
                    onChange={handleOnChange}
                />
            </Border>
            {rightIcon && (
                <Overlay right={0} top={0} bottom={0}>
                    <Center>{rightIcon}</Center>
                </Overlay>
            )}
        </Stack>
    );
};
