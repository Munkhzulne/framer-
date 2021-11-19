import styled from 'styled-components';
import { BackgroundStyle } from './background';
import { DimensionStyle } from './styles';

export const Center = styled.div<DimensionType & BackgroundType>`
    align-items: center;
    display: flex;
    justify-content: center;
    flex: 1;
    align-self: center;
    ${DimensionStyle}
    ${BackgroundStyle}
`;
