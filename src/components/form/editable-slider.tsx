import {
    Input,
    SliderProps,
    withStyles,
} from '@material-ui/core';
import { Field, useField } from 'formik';
import React, { FC } from 'react';
import { Border, Slider, Text } from '../basic';
import { TextEntryStyle } from '../input';
import { Grid, Overlay, Stack } from '../layout';
import styled from 'styled-components';
import { InputProps } from '../input/input.d';

const CustomSlider = withStyles({
    root: {
        color: 'white',
        padding: '20px 0',
    },
    thumb: {
        color: 'gray',
    },
})(Slider);

const CustomInput = withStyles({
    root: {
        color: 'white',
    },
    underline: {
        borderBottom: 'white 1px solid',
    },
})(Input);

const RawEditableSlider: FC<InputProps & SliderProps> = ({
    label,
    onChange,
    type,
    placeholder,
    value,
    step,
    min,
    max,
    ...props
}) => {
    return (
        <Stack size={2}>
            <Text type={'primary5'} role="light">
                {label}
            </Text>
            <Grid columns={[1, 3]} align="flex-end">
                <CustomInput
                    value={value}
                    inputProps={{
                        step: step,
                        min: min,
                        max: max,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                    onChange={onChange}
                />
                <CustomSlider
                    step={step}
                    min={min}
                    max={max}
                    {...props}
                    value={value}
                    style={{
                        alignSelf: 'flex-end',
                        padding: 0,
                        margin: 0,
                        bottom: -4,
                    }}
                    valueLabelDisplay="auto"
                    onChangeCommitted={onChange}
                />
            </Grid>
        </Stack>
    );
};

export const EditableSlider: FC<InputProps & SliderProps> = styled(
    RawEditableSlider
)`
    ${TextEntryStyle}
`;
