import React, { FC } from 'react';
import styled from 'styled-components';
import { fibonacci } from '../utility';

const BoxContainer = styled.div<BoxType>`
    width: ${(props) =>
        (props.width &&
            `${props.theme.baseSpace * fibonacci(props.width)}px`) ||
        '100%'};
    height: 0;
    overflow: hidden;
    position: relative;
    border-radius: ${({ theme: { baseSpace } }) => baseSpace}px;
    background: url(${({ image }) => image}) no-repeat center;
    background-size: contain;
    background-position-x: center;
    padding-top: ${(props) =>
        props.width
            ? `${
                  props.theme.baseSpace *
                      fibonacci(props.width) *
                      props.ratio || 0
              }px`
            : `${(props.ratio || 1) * 100}%`};
`;

const BoxWrapper = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: absolute;
`;

export const Box: FC<BoxType> = ({ children, ...props }) => (
    <BoxContainer {...props}>
        <BoxWrapper>{children}</BoxWrapper>
    </BoxContainer>
);
