import styled from 'styled-components';
import { fibonacci } from '../utility';
import { BackgroundStyle } from './background';
import { DimensionStyle, InteractiveStyle } from './styles';

export const Queue = styled.div<QueueType & DimensionType & BackgroundType>`
    display: flex;
    justify-content: ${({ justifyContent }: any) => justifyContent};
    justify-content: ${({ alignItems }: any) =>
        alignItems === 'right' && 'flex-end'};
    & > * + * {
        margin-left: ${({ theme, size }: any) =>
            theme.baseSpace * fibonacci(size)}px;
    }
    align-items: ${({ alignVertical }: any) => alignVertical || 'center'};
    ${DimensionStyle}
    ${BackgroundStyle}
    ${({ onClick }) => onClick && InteractiveStyle}
`;
