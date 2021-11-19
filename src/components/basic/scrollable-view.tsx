import styled from 'styled-components';
import _ from 'lodash';

type ScrollableViewType = {
    height?: number | string;
};

export const ScrollableView = styled.div<ScrollableViewType>`
    height: ${({ height }) =>
        _.isNumber(height) ? `${height || 0}px` : height};
    overflow-y: scroll;
    overflow-x: hidden;
`;
