import { css } from 'styled-components';
import { fibonacci } from '../utility';
import _ from 'lodash';

export const InteractiveStyle = css`
    cursor: pointer;
    outline: none;
`;

export const DisabledStyle = css`
    opacity: ${({ disabled }: any) => (disabled ? '0.1' : 1)};
    pointer-events: ${({ disabled }: any) => (disabled ? 'none' : 'all')};
`;

export const sideSpacing = (key) => ({ theme, ...props }) => {
    const side = _.property(key)(props);
    if (_.isUndefined(side)) {
        return;
    }
    return dimensionToStyle(side, theme.baseSpace);
};

export const dimensionToStyle = (size, baseSpace) => {
    if (_.isUndefined(size)) {
        return;
    }
    return _.isString(size) ? size : `${fibonacci(size) * baseSpace}px`;
};

export const DimensionStyle = css`
    width: ${({ width, theme }: DimensionType) =>
        dimensionToStyle(width, theme.baseSpace)};
    height: ${({ height, theme }: DimensionType) =>
        dimensionToStyle(height, theme.baseSpace)};
    max-height: ${({ maxHeight }: DimensionType) => maxHeight};
    overflow-y: ${({ maxHeight }: DimensionType) =>
        maxHeight ? 'scroll' : 'visible'};
`;
