import { Grow } from '@material-ui/core';
import React from 'react';
import {
    AlertIcon,
    AllDoneIcon,
    FailureSlashIcon,
    InfoIcon,
} from '../../assets/icons';
import { SpinningSyncIcon } from '../animation/spinning-sync-icon';
import { Border, Text, TextRoleType } from '../basic';
import { Center, Padding, Queue, Spacer } from '../layout';

type NotificationRole = 'alert' | 'error' | 'info' | 'loading' | 'success';

export type NotificationProps = {
    role: NotificationRole;
    message?: string;
    duration?: number;
    children?: JSX.Element;
};
interface NotificationConfig {
    textRole?: TextRoleType;
    backgroundRole?: BackgroundRole;
    backgroundColor?: ColorType;
    icon?: JSX.Element;
    message?: string;
}

const getNotifObjects = (type): NotificationConfig => {
    switch (type) {
        default:
            return {};
        case 'success':
            return {
                backgroundRole: 'success',
                textRole: 'light',
                icon: <AllDoneIcon />,
            };
        case 'error':
            return {
                backgroundRole: 'error',
                textRole: 'light',
                icon: <FailureSlashIcon />,
            };
        case 'alert':
            return {
                icon: <AlertIcon role="light" />,
                textRole: 'light',
                backgroundRole: 'alert',
            };
        case 'info':
            return {
                icon: <InfoIcon />,
                backgroundRole: 'primary',
            };
        case 'loading':
            return {
                icon: <SpinningSyncIcon />,
                backgroundColor: 'gray',
                message: 'Processing',
                textRole: 'light',
            };
    }
};

export const Notification = ({
    role,
    message,
    children,
}: NotificationProps) => {
    const { backgroundRole, icon, textRole, backgroundColor } =
        getNotifObjects(role) || {};
    return (
        <Grow in={true}>
            <div style={{ position: 'relative' }} data-cy="notification">
                <Border
                    radius="small"
                    backgroundRole={backgroundRole}
                    backgroundColor={backgroundColor}
                >
                    <Padding size={[1, 3]}>
                        <Queue size={4}>
                            {icon && (
                                <Spacer size={1}>
                                    <Center>{icon}</Center>
                                </Spacer>
                            )}
                            <Spacer size={35}>
                                <Text nowrap role={textRole}>
                                    {children || message}
                                </Text>
                            </Spacer>
                        </Queue>
                    </Padding>
                </Border>
            </div>
        </Grow>
    );
};
