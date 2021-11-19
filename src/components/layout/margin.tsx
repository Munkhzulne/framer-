import styled from 'styled-components';
import { fibonacci } from '../utility';
import { BackgroundStyle } from './background';
import { DimensionStyle } from './styles';
import _ from 'lodash';

export const Margin = styled.div<MarginType & DimensionType>`
    margin: ${({ theme, size }) =>
        !_.isArray(size)
            ? `${fibonacci(size) * theme.baseSpace}px`
            : size.map((d) => `${fibonacci(d) * theme.baseSpace}px`).join(' ')};
    ${DimensionStyle}
    ${BackgroundStyle}
`;
