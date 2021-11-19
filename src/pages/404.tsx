import React from 'react';
import { Center, Container, Padding, Text } from '../components';
import { Header } from '../navigation/header';
import { GlobalThemeStyle, Theme, TypographyStyle } from '../theme';

export default () => {
    return (
        <Theme>
            <TypographyStyle />
            <GlobalThemeStyle />
            <Header />
            <Container>
                <Padding size={[8, 3]}>
                    <Center>
                        <Text type="heading2">
                            Sorry page is missing...
                        </Text>
                    </Center>
                </Padding>
            </Container>
        </Theme>
    );
};
