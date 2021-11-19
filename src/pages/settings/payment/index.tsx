import React from 'react';
import { Border, Grid, Padding, Text } from '../../../components';
import { Sidebar } from '../../../components/settings-sidebar';
import { SecurePage } from '../../../navigation';

const Page = () => {
    return (
        <Padding size={[8, 0]}>
            <Grid columns={[1, 4]} space={15}>
                <Sidebar type="payment" />
                <Border>
                    <Text type="heading1">Payment</Text>
                </Border>
            </Grid>
        </Padding>
    );
};
export default () => {
    return (
        <SecurePage>
            <Page />
        </SecurePage>
    );
};
