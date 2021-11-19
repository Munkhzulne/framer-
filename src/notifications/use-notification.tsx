import { useContext } from 'react';
import { NotificationContext } from './notification-provider';

export const useErrorNotification = () => {
    const { addNotification } = useContext(NotificationContext);
    return (error) => {
        addNotification({
            role: 'error',
            message:
                error?.message || 'Something went wrong please try again...',
        });
    };
};

export const useSuccessNotification = () => {
    const { addNotification } = useContext(NotificationContext);
    return (message) => {
        addNotification({
            role: 'success',
            message: message || 'Successfully fulfilled the task.',
        });
    };
};

export const useLoadingNotification = () => {
    const { addNotification } = useContext(NotificationContext);
    return () => {
        addNotification({
            role: 'loading',
            message: 'Processing...',
        });
    };
};
