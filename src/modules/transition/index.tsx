import React from 'react';
import styled from 'styled-components';
import { Center, GlobalThemeStyle, Theme } from '../..';
import { AnimatedLogo } from '../../assets';

const Background = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    background-color: #ffffff;
    top: 0;
    left: 0;
`;

export const TransitionScreen = () => {
    return (
        <Theme>
            <GlobalThemeStyle />
            <Background>
                <Center height="100%">
                    <AnimatedLogo />
                </Center>
            </Background>
        </Theme>
    );
};
