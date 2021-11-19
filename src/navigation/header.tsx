import firebase from 'firebase/app';
import { Link, navigate } from 'gatsby';
import React, { FC, ReactNode, useState } from 'react';
import {
    FramerIcon,
    GridIcon,
    QuestionMarkCircleIcon,
    UserProfileIcon,
} from '../assets';
import FramerLogo from '../assets/images/logo-dark.svg';
import {
    Border,
    Button,
    Center,
    Container,
    DropDown,
    InteractiveIcon,
    Padding,
    Queue,
    Shadow,
    Spinner,
    Stack,
    Text,
} from '../components';
import { useFirestoreDocument, useUser } from '../firebase';
import styled from 'styled-components';
import { globalHistory } from '@reach/router';
import { colors } from '../theme';
import { SaveAndDownloadTemplate, TemplateName } from '../modules/template';

interface NavigationProps {
    children: ReactNode;
    active?: boolean;
    href?: string;
}

const NavigationWrapper = styled.div`
    width: 100%;
    background-color: #fff;
    z-index: 99;
`;

const AbsoluteWrapper = styled.div`
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

const AccountDetail = () => {
    let { user } = useUser();
    let { uid } = user || {};
    let { data: userData } = useFirestoreDocument('accounts', uid);
    let [loading, setLoading] = useState(false);
    const logout = async () => {
        setLoading(true);
        try {
            await firebase.auth().signOut();
            navigate('/');
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    };

    const settings = async () => {
        navigate('/settings');
    };

    return (
        <DropDown.Provider>
            <DropDown.Trigger>
                <Center>
                    <UserProfileIcon
                        height={17}
                        width={17}
                        data-cy="showProfileDropdown"
                    />
                </Center>
            </DropDown.Trigger>
            <DropDown.Content width={10}>
                <Stack>
                    <Border role="secondary" borderSize={[0, 0, 1, 0]}>
                        <Padding size={[4]}>
                            <Text type="primary5">
                                Welcome{' '}
                                {userData
                                    ? userData?.firstName
                                    : user?.displayName}
                            </Text>
                        </Padding>
                    </Border>
                    <Border role="secondary" borderSize={[0, 0, 1, 0]}>
                        <Padding size={[4]} onClick={settings}>
                            <Queue size={4}>
                                <Text type="primary5">Settings</Text>
                            </Queue>
                        </Padding>
                    </Border>
                    <Padding size={[4]} onClick={logout}>
                        <Queue size={4}>
                            {loading && <Spinner />}
                            <Text type="primary5">Logout</Text>
                        </Queue>
                    </Padding>
                </Stack>
            </DropDown.Content>
        </DropDown.Provider>
    );
};

const QuestionsNavigation = () => {
    return (
        <Link to="/">
        <InteractiveIcon>
            <Center>
                <QuestionMarkCircleIcon />
            </Center>
        </InteractiveIcon></Link>
    );
};

const GridNavigation = () => {
    let { pathname } = globalHistory.location;
    const active = pathname === '/settings';
    return (
        <Link to="/settings">
            <InteractiveIcon>
                <Center>
                    <GridIcon role={active ? 'primary' : undefined} />
                </Center>
            </InteractiveIcon>
        </Link>
    );
};

export const Header = () => {
    let { pathname } = globalHistory.location;

    return (
        <NavigationWrapper>
            <AbsoluteWrapper>
                <Shadow>
                    <div style={{ width: '100%', backgroundColor: '#FFFFFF' }}>
                        <Container>
                            <Padding size={[4, 0, 4, 0]}>
                                <Queue justifyContent="space-between" size={4}>
                                    <Queue size={7.15} width="100%">
                                        <Link to="/dashboard">
                                            <img src={FramerLogo} height={40} />
                                        </Link>
                                        <Queue
                                            justifyContent="space-between"
                                            width="100%"
                                        >
                                            <Queue size={6}></Queue>
                                            <Queue size={6}>
                                                <QuestionsNavigation/>
                                                <GridNavigation />
                                                <AccountDetail />
                                            </Queue>
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
export const EditorHeader = () => {
    let { pathname } = globalHistory.location;

    return (
        <NavigationWrapper>
            <AbsoluteWrapper>
                <Shadow>
                    <div style={{ width: '100%', backgroundColor: '#16161D' }}>
                        <Padding size={[4, 8, 4, 4]}>
                            <Queue justifyContent="space-between" size={4}>
                                <Queue size={7.15} width="100%">
                                    <Link to="/dashboard">
                                        <FramerIcon width={40} height={40} />
                                    </Link>
                                    <Queue
                                        justifyContent="space-between"
                                        width="100%"
                                    >
                                        <TemplateName />
                                        <Queue size={6}>
                                            <SaveAndDownloadTemplate />
                                            {/* <GridNavigation />
                                            <AccountDetail /> */}
                                        </Queue>
                                    </Queue>
                                </Queue>
                            </Queue>
                        </Padding>
                    </div>
                </Shadow>
            </AbsoluteWrapper>
        </NavigationWrapper>
    );
};
