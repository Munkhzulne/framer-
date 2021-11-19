import firebase from 'firebase/app';
import { navigate } from 'gatsby';
import React, { useEffect, useState } from 'react';
import {
    Border,
    Box,
    Container,
    GlobalThemeStyle,
    Grid,
    LoadingBlockScreen,
    Padding,
    Queue,
    Stack,
    Text,
    Theme,
    TypographyStyle,
    useFirebase,
    useUser,
} from '..';
import { GoogleIcon} from '../assets';
import Lottie from 'lottie-react';
import lottieAnimation from './lottie.json';
import FramerLogo from '../assets/images/logo-dark.svg';
import { Margin } from '../components';
import { AsyncButton } from '../components/button/async-button';
import { LoginForm, SignUpForm } from '../modules/authentication';
import { NotificationProvider } from '../notifications';

const Login = () => {
    let { auth } = useFirebase();
    let { user, loading } = useUser();
    let [login, setLogin] = useState(false);

    useEffect(() => {
        if (!loading && user) {
            navigate('/dashboard');
        }
    }, [user, loading]);
    const signUpWithProvider = async () => {
        await auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    };

    return (
        <Theme>
            <Border backgroundColor="gray">
                <NotificationProvider>
                    <TypographyStyle />
                    <GlobalThemeStyle />
                    {loading && <LoadingBlockScreen />}
                    <div style={{ minHeight: '100vh' }}>
                        <Container>
                            <Grid columns={[1, 1]} space={8} height="100%">
                                <Border
                                    height="100%"
                                    role="tertiary"
                                    borderSize={[0, 2, 0, 0]}
                                >
                                    <Padding size={[10, 6]}>
                                        <Stack size={6}>
                                            <Lottie
                                                animationData={lottieAnimation}
                                            />
                                            <Text>
                                                {/* Framer бол контент үүсгэх платформ
                                            бөгөөд та бидний тусламжтайгаар маш
                                            хялбараар гайхалтай зар
                                            сурталчилгааг бүтээж чадна. */}
                                                Framer is a video content
                                                creation platform that makes it
                                                easy for marketers to create
                                                videos for social media
                                                marketing.
                                            </Text>
                                        </Stack>
                                    </Padding>
                                </Border>
                                <Padding size={[10, 11, 10, 6]}>
                                    <Stack size={6} alignVertical="flex-end">
                                        <Box
                                            width={10}
                                            ratio={0.3}
                                            image={FramerLogo}
                                        />
                                        {login ? (
                                            <Text type="primary3">
                                                {/* Бүртгэлгүй юу? */}
                                                Don't have an account? {` `}
                                                <Text
                                                    onClick={() =>
                                                        setLogin(false)
                                                    }
                                                    type="primary2"
                                                    role="dark"
                                                    underlined={true}
                                                >
                                                    {/* Бүртгүүлэх */}
                                                    Sign Up
                                                </Text>
                                            </Text>
                                        ) : (
                                            <Text type="primary3">
                                                {/* Аль хэдийн бүртгүүлсэн үү? */}
                                                Already have an account?{` `}
                                                <Text
                                                    onClick={() =>
                                                        setLogin(true)
                                                    }
                                                    type="primary2"
                                                    role="dark"
                                                    underlined={true}
                                                >
                                                    {/* Нэвтрэх */}
                                                    Login
                                                </Text>
                                            </Text>
                                        )}
                                        {login ? <LoginForm /> : <SignUpForm />}
                                        <Text
                                            type="primary5"
                                            alignment="center"
                                        >
                                            Or
                                        </Text>
                                        <AsyncButton
                                            onClick={signUpWithProvider}
                                            backgroundHoverColor="white.main"
                                        >
                                            <Queue alignItems="center">
                                                <Margin size={[0, 3, 0, 0]}>
                                                    <Text>Google</Text>
                                                </Margin>
                                                <GoogleIcon />
                                            </Queue>
                                        </AsyncButton>
                                    </Stack>
                                </Padding>
                            </Grid>
                        </Container>
                    </div>
                </NotificationProvider>
            </Border>
        </Theme>
    );
};

export default Login;
