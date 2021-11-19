import styled, { css } from 'styled-components';
import { DimensionStyle } from '../layout';

type ShadowType = {
    interactive?: boolean;
};

export const ShadowStyle = css`
    /* box-shadow: 0px 8px 16px rgba(114, 98, 238, 0.04); */
    /* box-shadow: 0px 4px 4px rgba(108, 73, 172, 0.07); */
    /* box-shadow: 0px 8px 16px rgba(114, 98, 238, 0.04); */
    box-shadow: 0px 15.6199px 12.4959px rgba(108, 73, 172, 0.035),
        0px 8.29561px 6.63648px rgba(108, 73, 172, 0.0282725),
        0px 3.45199px 2.76159px rgba(108, 73, 172, 0.0196802);
    transition: all 0.2s;
`;

export const Shadow = styled.div<ShadowType & DimensionType>`
    ${DimensionStyle}
    & > * {
        ${ShadowStyle}
        ${({ interactive }) =>
            interactive &&
            css`
                cursor: pointer;
            `}
    }
`;
