import _ from 'lodash';
import styled from 'styled-components';
import { fibonacci } from '../utility';
import { BackgroundStyle } from './background';
import { DimensionStyle } from './styles';

export const Padding = styled.div<PaddingType & DimensionType & BackgroundType>`
    position: relative;
    padding: ${({ theme, size }) =>
        !_.isArray(size)
            ? `${fibonacci(size) * theme.baseSpace}px`
            : size.map((d) => `${fibonacci(d) * theme.baseSpace}px`).join(' ')};
    ${DimensionStyle}
    ${BackgroundStyle}
`;
