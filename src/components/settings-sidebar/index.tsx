import { navigate } from 'gatsby';
import _ from 'lodash';
import React, { ReactNode } from 'react';
import {
    CloseCircleOutlinedIcon,
    CreditCardIcon,
    UserProfileIcon,
} from '../../assets';
import { Border, Text } from '../basic';
import { Grid, Margin, Padding, Stack } from '../layout';

type SidebarItemTypes = '' | 'profile' | 'payment';

export const SidebarItem = ({
    children,
    active,
    isLast = false,
    onClick,
}: {
    children?: ReactNode;
    active: boolean;
    isLast?: boolean;
    onClick: () => void;
}) => {
    return (
        <Border
            backgroundColor={active ? 'blue.light' : 'transparent'}
            borderSize={isLast ? [1, 0, 1, 0] : [1, 0, 0, 0]}
            color="gray"
            onClick={onClick}
        >
            <Padding size={5}>{children}</Padding>
        </Border>
    );
};

export const Sidebar = (props: { type: SidebarItemTypes }) => {
    const { type } = props;

    const handleNavigation = (sidebarItem: SidebarItemTypes) => {
        navigate(`/settings/${sidebarItem == 'profile' ? '' : sidebarItem}`, {
            replace: true,
        });
    };

    const navigateToEditProfile = () => handleNavigation('profile');
    const navigateToEditPayments = () => handleNavigation('payment');

    return (
        <div style={{ position: 'relative' }}>
            <Text type="heading1">Settings</Text>
            <Margin size={[6, 0, 0, 0]}>
                <SidebarItem
                    active={type === 'profile'}
                    onClick={navigateToEditProfile}
                >
                    <Grid columns={[1, 7]} space={0}>
                        <Padding size={[0, 0, 0, 1]}>
                            <UserProfileIcon role="primary" width={14} />
                        </Padding>
                        <Stack>
                            <Text type="primary4">Your Profile</Text>
                            <Text role="primary" type="tertiary1">
                                Details about your personal information
                            </Text>
                        </Stack>
                    </Grid>
                </SidebarItem>
                <SidebarItem
                    active={type === 'payment'}
                    isLast={true}
                    onClick={navigateToEditPayments}
                >
                    <Grid columns={[1, 7]} space={0}>
                        <CreditCardIcon width={20} />
                        <Stack>
                            <Text type="primary4">Payment</Text>
                            <Text role="primary" type="tertiary1">
                                Your plan
                            </Text>
                        </Stack>
                    </Grid>
                </SidebarItem>
            </Margin>
        </div>
    );
};
