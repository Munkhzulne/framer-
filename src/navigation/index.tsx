import { navigate } from 'gatsby';
import React, { useEffect } from 'react';
import { TransitionScreen } from '..';
import { AnimatedFadeInView, Center, Container, Overlay } from '../components';
import { ModifyTemplateContextProvider } from '../modules/providers';
import { useUser } from '../firebase';
import { NotificationProvider } from '../notifications';
import { GlobalThemeStyle, Theme, TypographyStyle } from '../theme';
import { EditorHeader, Header } from './header';
import { ApiProvider } from '../api';
import { ConfirmationContextProvider } from '../confirmation/confirmation-provider';
import { globalHistory } from '@reach/router';
import { FabricContextProvider } from '../modules/fabric/fabric-provider';

export const LoadingBlockScreen = () => {
    let { loading, user } = useUser();
    if (!loading && user) {
        return null;
    }
    return (
        <Overlay
            top={0}
            left={0}
            right={0}
            bottom={0}
            width="100%"
            height="100%"
            backgroundRole="light"
            zIndex={99}
        >
            <Center>
                <TransitionScreen />
            </Center>
        </Overlay>
    );
};

export const SecurePage = ({ children }) => {
    let { pathname } = globalHistory.location;
    let { loading, user } = useUser();
    useEffect(() => {
        if (!loading && !user) {
            navigate('/login');
        }
    }, [loading, user]);
    if (loading) {
        return <TransitionScreen />;
    }
    return (
        <ApiProvider>
            <Theme>
                <ModifyTemplateContextProvider>
                    <FabricContextProvider>
                        <NotificationProvider>
                            <ConfirmationContextProvider>
                                <TypographyStyle />
                                <GlobalThemeStyle />
                                <LoadingBlockScreen />
                                <div
                                    style={{
                                        height: '100vh',
                                        position: 'relative',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        overflow: 'hidden',
                                    }}
                                >
                                    {pathname.includes('template') ? (
                                        <>
                                            <EditorHeader />
                                            <AnimatedFadeInView
                                                height="100%"
                                                visible={!loading && user}
                                            >
                                                {children}
                                            </AnimatedFadeInView>{' '}
                                        </>
                                    ) : (
                                        <>
                                            <Header />
                                            <AnimatedFadeInView
                                                height="100%"
                                                visible={!loading && user}
                                            >
                                                <Container>
                                                    {children}
                                                </Container>
                                            </AnimatedFadeInView>
                                        </>
                                    )}
                                </div>
                            </ConfirmationContextProvider>
                        </NotificationProvider>
                    </FabricContextProvider>
                </ModifyTemplateContextProvider>
            </Theme>
        </ApiProvider>
    );
};
