import React from 'react';
import { Padding, Text } from '../components';
import { SecurePage } from '../navigation';
const Page = () => {
    return (
        <Padding size={[8, 0]}>
            <Text type="heading3">Account Settings</Text>
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
