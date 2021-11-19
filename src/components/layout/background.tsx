import { css } from 'styled-components';
import { colors } from '../../theme';
import _ from 'lodash';
import { InteractiveStyle } from './styles';

const mapRoleToBackground = {
    primary: colors.dark,
    secondary: colors.gray,
    tertiary: colors.pink,
    success: colors.green.main,
    alert: colors.orange.main,
    error: colors.red.main,
    light: colors.white.main,
    transparent: colors.transparent.main,
    darkBlue: colors.darkBlue
};
const mapRoleToHover = {
    primary: colors.blue.hover,
    secondary: colors.purple.hover,
    success: colors.green.hover,
    alert: colors.orange.hover,
    error: colors.red.hover,
};

export const mapColorToBackground = (color) => {
    return _.get(colors, color || 'dark');
};

export const mapRoleToBackgroundColor = (
    role: keyof typeof mapRoleToBackground
) => {
    return mapRoleToBackground[role || 'transparent'];
};

export const mapRoleToHoverColor = (role) => {
    return mapRoleToHover[role];
};

const HoverableStyle = css<BackgroundType>`
    &:hover {
        background-color: ${({ hoverRole }) =>
            hoverRole &&
            `${mapRoleToHoverColor(hoverRole)}; ${InteractiveStyle}`};
    }
`;

export const BackgroundStyle = css`
    background-color: ${({ backgroundRole, backgroundColor }: BackgroundType) =>
        backgroundColor
            ? mapColorToBackground(backgroundColor)
            : mapRoleToBackgroundColor(backgroundRole)};
    ${HoverableStyle}
`;
