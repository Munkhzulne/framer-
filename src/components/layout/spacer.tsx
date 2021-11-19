import styled from 'styled-components';
import { BackgroundStyle } from './background';
import { DimensionStyle } from './styles';

export const Spacer = styled.div<SpacerType & DimensionType & BackgroundType>`
    flex: ${({ size }) => size};
    flex-grow: ${({ grow }) => grow};
    text-align: ${({ alignment }) => alignment || 'left'};
    ${DimensionStyle}
    ${BackgroundStyle}
`;
