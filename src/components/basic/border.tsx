import _ from 'lodash';
import styled, { css } from 'styled-components';
import { colors } from '../../theme';
import { BackgroundStyle, DimensionStyle, InteractiveStyle } from '../layout';

const mapRoleToBorder = {
    primary: colors.pink,
    secondary: colors.gray,
    tertiary: colors.dark,
    success: colors.green.main,
    alert: colors.orange.main,
    error: colors.red.main,
    light: colors.white.main,
    transparent: colors.transparent.main,
};
export type BorderRole = keyof typeof mapRoleToBorder;
interface BorderType {
    role?: BorderRole;
    radius?: keyof typeof mapBorderRadius | '';
    color?: ColorType;
    selected?: boolean;
    borderSize?: number[];
    animationDelay?: string | number;
    overflow?: 'auto' | 'hidden' | 'scroll' | 'visible';
    interactive?: boolean;
    loading?: boolean;
    disabled?: boolean;
}

const mapBorderRadius = {
    circle: '50%',
    small: '3px',
    medium: '5px',
    large: '8px',
    xlarge: '100px',
};

export const mapRoleToBorderColor = (role) => {
    return mapRoleToBorder[role];
};

export const mapColorToBorder = (color) => {
    return _.get(colors, color || 'pink');
};

const mapBorderRadiusByType = (type) => mapBorderRadius[type] || '0px';

const HoverableStyle = css<BorderType>`
    :hover {
        border-color: ${mapColorToBorder['secondary.main']};
    }
`;

const DisabledStyle = css<BorderType>`
    opacity: 0.1;
    pointer-events: none;
`;

export const BorderStyle = css<BorderType>`
    border-radius: ${({ radius }) => mapBorderRadiusByType(radius)};
    border-width: ${({ borderSize }) =>
        _.flow((borderSize) =>
            _.map(borderSize, (value) => {
                return `${value}px`;
            }).join(' ')
        )(borderSize)};
    border-color: ${({ role, color }) =>
        color
            ? mapColorToBorder(color)
            : mapRoleToBorderColor(role || 'transparent')};

    border-style: solid;
    position: relative;
    overflow: ${({ overflow }) => overflow};
`;

export const Border = styled.div<BorderType & DimensionType & BackgroundType>`
    transition: all ${({ animationDelay }) => animationDelay || '0.0'}s;
    ${({ interactive }) => interactive && HoverableStyle};
    ${({ onClick, loading }) => !loading && onClick && InteractiveStyle};
    ${BorderStyle};
    ${DimensionStyle};
    ${BackgroundStyle};
    ${({ disabled }) => disabled && DisabledStyle}
`;
