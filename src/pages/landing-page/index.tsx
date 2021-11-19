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
} from '../..';
import Lottie from 'lottie-react';
import lottieAnimation from '../lottie.json';
import WidgetLogo from '../../assets/images/editor.png';
import { Button, Center, Margin } from '../../components';
import { Header } from './header';

const LandingPage = () => {

    return (
        <Theme>
            <Border
                backgroundColor="dark"
                height="100vh"
                borderSize={[0, 0, 15, 0]}
                role="primary"
            >
                <Center height="100%">
                    <Header />
                    <Container>
                        <Padding size={[8, 0]}>
                            <Grid columns={[1, 1]} align="center" space={7}>
                                <Padding size={[0, 4, 0, 8]}>
                                    <Stack size={7}>
                                        <Stack size={4}>
                                            <Text type="big1" role="light">
                                                {/* Зар сурталчилгаанд хүрээ үүсгэгч */}
                                                Marketing Frame Extender
                                            </Text>
                                            <Text
                                                type="heading3"
                                                role="primary"
                                            >
                                                {/* Framer бол контент үүсгэх
                                                платформ бөгөөд та бидний
                                                тусламжтайгаар маш хялбараар
                                                гайхалтай зар сурталчилгааг
                                                бүтээж чадна. */}
                                                Framer is a video content
                                                creation platform that makes it
                                                easy for marketers to create
                                                videos for social media
                                                marketing.
                                            </Text>
                                        </Stack>

                                        <Queue>
                                            <Button type="secondary" onClick={() => navigate('/dashboard')}>
                                                <Padding size={[3, 7, 3, 7]}>
                                                    {/* Туршиж үзэх */}
                                                    Try for free
                                                </Padding>
                                            </Button>
                                        </Queue>
                                    </Stack>
                                </Padding>
                                <Lottie animationData={lottieAnimation} />
                            </Grid>
                        </Padding>
                    </Container>
                </Center>
            </Border>
            <Border backgroundColor="gray">
                <Container>
                    <Padding size={[8, 0]}>
                        <Center>
                            <Stack size={10}>
                                <Stack size={6}>
                                    <Text type="big2" alignment="center">
                                        {/* Онцлох давуу талууд */}
                                        Main features
                                    </Text>
                                    <Text
                                        alignment="center"
                                        type="heading3"
                                        role="primary"
                                    >
                                        <Padding size={[0, 9, 0, 9]}>
                                            {/* Framer бол контент үүсгэх платформ
                                            бөгөөд та бидний тусламжтайгаар маш
                                            хялбараар гайхалтай зар
                                            сурталчилгааг бүтээж чадна. Та ямар
                                            ч Framer-ийн талаар ямар ойлголтгүй
                                            байсан ч бидэнд байгаа бэлэн текст,
                                            дүрс, зургуудыг ашиглан маг
                                            хялбараар хүссэнээ хийх боломжтой. */}
                                            Framer is a video content creation
                                            platform that makes it easy for
                                            marketers to create videos for
                                            social media marketing. Using
                                            existing text and the combination of
                                            a drag and drop creation studio and
                                            professional graphic overlays anyone
                                            can create videos without any
                                            knowledge of production.
                                        </Padding>
                                    </Text>
                                </Stack>
                                <Grid columns={[1, 1]}>
                                    <Stack size={5}>
                                        <Center>
                                            <Text type="big2">
                                                <Padding size={[0, 6, 0, 6]}>
                                                    {/* Видео болон зургаа оруулаад
                                                    өөрийн хүссэнээрээ нэмэлт
                                                    өөрчлөлтүүд хийнэ. */}
													Upload video footage and images to create a video canvas
                                                </Padding>
                                            </Text>
                                        </Center>
                                        <Text type="heading3" role="primary">
                                            <Padding size={[0, 8, 0, 6]}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Elementum nisi aliquet volutpat pellentesque volutpat
                        est. Sapien in etiam vitae nibh nunc mattis imperdiet
                        sed nullam. Vitae et, tortor pulvinar risus pulvinar sit
                        amet.
                                            </Padding>
                                        </Text>
                                    </Stack>
                                    <Center>
                                        <img src={WidgetLogo} width={500} />
                                    </Center>
                                </Grid>
                                <Grid columns={[1, 1]}>
                                    <Padding size={[0, 0, 0, 6]}>
                                        <img src={WidgetLogo} width={500} />
                                    </Padding>
                                    <Center>
                                        <Stack size={5}>
                                            <Text type="big2">
                                                <Padding size={[0, 6, 0, 8]}>
                                                    {/* Ганцхан товшилтоор л бэлэн
                                                    болсон бүтээлээ татаж авна. */}
													Download completed videos with a single click
                                                </Padding>
                                            </Text>
                                            <Text
                                                type="heading3"
                                                role="primary"
                                            >
                                                <Padding size={[0, 8, 0, 8]}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Elementum nisi aliquet volutpat pellentesque
                          volutpat est. Sapien in etiam vitae nibh nunc mattis
                          imperdiet sed nullam. Vitae et, tortor pulvinar risus
                          pulvinar sit amet.
                                                </Padding>
                                            </Text>
                                        </Stack>
                                    </Center>
                                </Grid>
                                <Grid columns={[1, 1]}>
                                    <Stack size={5}>
                                        <Center>
                                            <Text type="big2">
                                                <Padding size={[0, 6, 0, 6]}>
                                                    Upload video footage and
                                                    images to create a video
                                                    canvas
                                                </Padding>
                                            </Text>
                                        </Center>
                                        <Text type="heading3" role="primary">
                                            <Padding size={[0, 8, 0, 6]}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Elementum nisi aliquet volutpat pellentesque volutpat
                        est. Sapien in etiam vitae nibh nunc mattis imperdiet
                        sed nullam. Vitae et, tortor pulvinar risus pulvinar sit
                        amet.
                                            </Padding>
                                        </Text>
                                    </Stack>
                                    <Center>
                                        <img src={WidgetLogo} width={500} />
                                    </Center>
                                </Grid>
                            </Stack>
                        </Center>
                    </Padding>
                </Container>
            </Border>
            <Border
                backgroundColor="dark"
                borderSize={[15, 0, 0, 0]}
                role="primary"
            >
                <Center height="100%">
                    <Container>
                        <Padding size={[10, 0, 10, 0]}>
                            <Stack size={7}>
                                <Text
                                    type="big2"
                                    alignment="center"
                                    role="light"
                                >
                                    {/* Үнийн санал */}
									Pricing Plans
                                </Text>
                                <Text
                                    alignment="center"
                                    type="heading3"
                                    role="light"
                                >
                                    <Padding size={[0, 9, 0, 9]}>
                                        Та хэзээ ч цуцлах боломжтой. Хэдхэн
                                        даралтаар л бүгдийг цуцлана.
                                    </Padding>
                                </Text>
                                <Center>
                                    <Border
                                        width="250px"
                                        role="light"
                                        backgroundColor="white.main"
                                        radius="large"
                                    >
                                        <Padding size={[7, 4, 7, 4]}>
                                            <Stack size={4}>
                                                <Text
                                                    type="heading1"
                                                    alignment="center"
                                                >
                                                    {/* Стандарт */}
													Standart
                                                </Text>
                                                <Border
                                                    borderSize={[2, 0, 0, 0]}
                                                    role="secondary"
                                                ></Border>
                                                <Text
                                                    type="heading1"
                                                    alignment="center"
                                                >
                                                    <Padding
                                                        size={[6, 0, 0, 0]}
                                                    >
                                                        ****төг
                                                    </Padding>
                                                </Text>
                                                <Text
                                                    type="primary4"
                                                    alignment="center"
                                                    role="primary"
                                                >
                                                    {/* template бүрт */}
													per template
                                                </Text>
                                                <Queue justifyContent="center">
                                                    <Button type="secondary">
                                                        <Padding
                                                            size={[3, 5, 3, 5]}
                                                        >
                                                            {/* Эхлэх */}
															Start
                                                        </Padding>
                                                    </Button>
                                                </Queue>
                                            </Stack>
                                        </Padding>
                                    </Border>
                                </Center>
                            </Stack>
                        </Padding>
                    </Container>
                </Center>
            </Border>
        </Theme>
    );
};

export default LandingPage;
