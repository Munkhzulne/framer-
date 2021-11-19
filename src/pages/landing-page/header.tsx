import firebase from 'firebase/app';
import { Link, navigate } from 'gatsby';
import React, { FC, ReactNode, useState } from 'react';
import BlitzzLogo from '../../assets/images/logo.svg';
import {
    Border,
    Button,
    Container,
    Padding,
    Queue,
    Shadow,
    Text,
} from '../../components';
import { useUser } from '../../firebase';
import styled from 'styled-components';
import { globalHistory } from '@reach/router';
import { colors } from '../../theme';

interface NavigationProps {
    children: ReactNode;
    active?: boolean;
    href?: string;
}

const NavigationWrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #16161d;
    z-index: 99;
`;

const AbsoluteWrapper = styled.div`
    position: absolute;
    width: 100%;
`;

export const NavigationItem: FC<NavigationProps> = ({
    children,
    href = '/',
    active,
}) => {
    return (
        <Link to={href}>
            <Border
                borderSize={[0, 0, 3, 0]}
                role={'transparent'}
                color={active ? 'blue.main' : undefined}
            >
                <Padding size={[4, 2]}>
                    <Text interactive type="primary2" role="tertiary">
                        {children}
                    </Text>
                </Padding>
            </Border>
        </Link>
    );
};

export const Header = () => {
    let { pathname } = globalHistory.location;
    let { user, loading } = useUser();

    return (
        <NavigationWrapper>
            <AbsoluteWrapper>
                <Shadow>
                    <div style={{ width: '100%', backgroundColor: '#16161D' }}>
                        <Container>
                            <Padding size={[4, 0, 4, 0]}>
                                <Queue justifyContent="space-between" size={4}>
                                    <Queue size={7.15} width="100%">
                                        <Link to="/">
                                            <img
                                                src={BlitzzLogo}
                                                width={274}
                                                height={55}
                                            />
                                        </Link>
                                        <Queue
                                            justifyContent="space-between"
                                            width="100%"
                                        >
                                            <Queue size={6}>
                                                <Text role="light">
                                                    {/* Бидний тухай */}
                                                    About us
                                                </Text>
                                                <Text role="light">
                                                    {/* Үнийн санал */}
                                                    Pricing
                                                </Text>
                                                <Text role="light">FAQ</Text>
                                            </Queue>

                                            {!user ? (
                                                <Queue size={6}>
                                                    <Link to="/login">
                                                        <Text role="light">
                                                            {/* Нэвтрэх */}
                                                            Login
                                                        </Text>
                                                    </Link>
                                                    <Button>
                                                        {' '}
                                                        <Link to="/login">
                                                            <Text role="primary">
                                                                {/* Бүртгүүлэх */}
                                                                Sign Up
                                                            </Text>
                                                        </Link>
                                                    </Button>
                                                </Queue>
                                            ) : (
                                                <Link to="/dashboard">
                                                    <Text role="light">
                                                        Dashboard
                                                    </Text>
                                                </Link>
                                            )}
                                        </Queue>
                                    </Queue>
                                </Queue>
                            </Padding>
                        </Container>
                    </div>
                </Shadow>
            </AbsoluteWrapper>
        </NavigationWrapper>
    );
};
