import styled from 'styled-components';
import { fibonacci } from '../utility';
import { BackgroundStyle } from './background';
import { DimensionStyle } from './styles';

export const Stack = styled.div<StackType & DimensionType & BackgroundType>`
    display: grid;
    grid-gap: ${({ theme, size }: any) => theme.baseSpace * fibonacci(size)}px;
    grid-template-columns: 1fr;
    position: relative;
    align-self: ${({ alignVertical }) => alignVertical};
    ${DimensionStyle}
    ${BackgroundStyle}
`;
