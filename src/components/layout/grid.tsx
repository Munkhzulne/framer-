import _ from 'lodash';
import styled from 'styled-components';
import { fibonacci } from '../utility';
import { DimensionStyle } from './styles';
import './types';

const columnTemplate = ({ theme, columns }) => {
    const { baseSpace } = theme;
    if (!columns) {
        return `repeat(auto-fill,minmax(${baseSpace * fibonacci(9)}px, 1fr))`;
    }
    if (_.isArray(columns)) {
        return columns?.map((d) => `${d}fr`).join(' ');
    }

    return _.range(columns)
        .map(() => `1fr`)
        .join(' ');
};

export const Grid = styled.div<GridType & DimensionType>`
    display: grid;
    align-items: ${({ align }) => align};
    grid-gap: ${({ theme, space = 3 }) => theme.baseSpace * space}px;
    grid-template-columns: ${({ theme, columns }) =>
        columnTemplate({ theme, columns })};
    grid-auto-rows: 1fr;
    ${DimensionStyle}
`;
