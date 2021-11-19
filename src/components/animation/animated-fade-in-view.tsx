import styled, { css } from 'styled-components';
import { DimensionStyle } from '../layout';
type AnimatedType = {
    visible?: boolean;
    height?: string | number;
};
export const AnimatedFadeInView = styled.div<AnimatedType & DimensionType>`
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    position: relative;
    height: ${({ visible, height }) => (visible ? height || 'auto' : 0)};
    transition: all 1s;
    width: auto;
    ${DimensionStyle}
`;

export const AnimatedHoverableFadeInViewStyle = css`
    opacity: 0;
    position: relative;
    height: 0;
    transition: all 1s;
    width: auto;
    :hover {
        opacity: 1;
        height: 'auto';
    }
`;
