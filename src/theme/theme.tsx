import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { colors } from './colors';

export const GlobalThemeStyle = createGlobalStyle`
`;

export const DEFAULT = {
    baseSpace: 4,
    desktop: 1440,
    colors,
};

export const Theme = ({ children }) => {
    return <ThemeProvider theme={DEFAULT}>{children}</ThemeProvider>;
};
