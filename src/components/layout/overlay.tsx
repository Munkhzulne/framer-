import styled from 'styled-components';
import { BackgroundStyle } from './background';
import { DimensionStyle, sideSpacing } from './styles';

export const Overlay = styled.div<OverlayType & DimensionType & BackgroundType>`
    position: ${({ relative }: any) => (relative ? 'relative' : 'absolute')};
    z-index: ${({ zIndex }: any) => zIndex};
    top: ${sideSpacing('top')};
    right: ${sideSpacing('right')};
    left: ${sideSpacing('left')};
    bottom: ${sideSpacing('bottom')};
    display: flex;
    overflow-x: ${({ scrollX }: any) => scrollX && 'scroll'};
    ${DimensionStyle}
    ${BackgroundStyle}
`;
