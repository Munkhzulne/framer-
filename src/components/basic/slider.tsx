import { Slider as MuiSlider, SliderProps } from '@material-ui/core';
import React, { FC } from 'react';

export const Slider: FC<SliderProps> = (props) => {
    return <MuiSlider {...props} />;
};
