import _ from 'lodash';
import React from 'react';
import { Grid } from '../..';
import { AnimatedLogo } from '../../assets';
import { Center, Padding, Stack, Text } from '../../components';

export const LoadingTemplates = () => {
    return (
        <Padding size={[10, 0]}>
            <Stack size={6}>
                <Center>
                    <AnimatedLogo />
                </Center>
                <Text type="primary3" role="primary" alignment="center">
                    Loading templates...
                </Text>
            </Stack>
        </Padding>
    );
};