import React, { FC } from 'react';
import styled from 'styled-components';
import { mapRoleToBackgroundColor } from '../layout';
import { fibonacci } from '../utility';

const Inner = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    display: flex;
`;

const div: FC<any> = ({ className, children }) => {
    return (
        <div className={className}>
            <Inner>{children}</Inner>
        </div>
    );
};

export const Circle = styled(div)<CircleType>`
    align-self: center;
    border-radius: 50%;
    border-style: solid;
    border-width: ${({ borderRole }) => (borderRole ? '1px' : 0)};
    border-color: ${({ borderRole }) =>
        mapRoleToBackgroundColor(borderRole) || 'transparent'};
    background-color: ${({ role }) =>
        mapRoleToBackgroundColor(role) || 'transparent'};
    display: inline-block;
    width: ${({ theme, size }) => theme.baseSpace * fibonacci(size)}px;
    height: ${({ theme, size }) => theme.baseSpace * fibonacci(size)}px;
    overflow: hidden;
    position: relative;
`;
