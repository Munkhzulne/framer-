import React, { createContext, ReactNode, useReducer } from 'react';
import {
    Container,
    Notification,
    NotificationProps,
    Overlay,
    Stack,
} from '../components';

export const NotificationContext = createContext({
    addNotification: (props: NotificationProps) => {},
    useAsyncNotification: (
        message: string,
        callback: (...data: any[]) => Promise<any>
    ) => async (...data: any[]) => {},
});

interface NotificationState {
    notifications: (NotificationProps & { key: number })[];
}
type NotificationAction =
    | { type: 'add'; payload: NotificationProps; key: number }
    | { type: 'update'; payload: NotificationProps; key: number }
    | { type: 'remove'; key: number };

const initialState = {
    notifications: [],
};

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
    const reducer = (
        state: NotificationState,
        action: NotificationAction
    ): NotificationState => {
        const { notifications } = state;
        switch (action?.type) {
            case 'add': {
                return {
                    notifications: [
                        { ...action?.payload, key: action?.key },
                    ].concat(notifications),
                };
            }
            case 'remove': {
                return {
                    notifications: notifications.filter(
                        ({ key }) => key != action.key
                    ),
                };
            }
            case 'update': {
                return {
                    notifications: notifications.map((props) => {
                        const { key } = props;
                        if (key === action.key) {
                            return {
                                ...action?.payload,
                                key,
                            };
                        }
                        return props;
                    }),
                };
            }
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const addNotification = (payload: NotificationProps) => {
        let key = Date.now();
        const { duration = 3000 } = payload;
        dispatch({ type: 'add', payload, key });
        setTimeout(() => {
            dispatch({ type: 'remove', key });
        }, duration);
    };

    const useAsyncNotification = (
        message: string,
        callback: (...data: any[]) => Promise<any>
    ) => {
        let key = Date.now();

        return async (...data) => {
            dispatch({
                type: 'add',
                payload: {
                    role: 'loading',
                    message: 'Processing...',
                },
                key,
            });
            try {
                await callback(...data);
                dispatch({
                    type: 'update',
                    payload: {
                        role: 'success',
                        message,
                    },
                    key,
                });
            } catch (error) {
                dispatch({
                    type: 'update',
                    payload: {
                        role: 'error',
                        message:
                            error?.message ||
                            'Something went wrong please try again...',
                    },
                    key,
                });
            }
            setTimeout(() => {
                dispatch({ type: 'remove', key });
            }, 3000);
        };
    };

    const { notifications } = state;
    return (
        <NotificationContext.Provider
            value={{ addNotification, useAsyncNotification }}
        >
            {children}

            <Container>
                <Overlay right={0} bottom={6}>
                    <Stack size={4}>
                        {notifications?.map((props) => {
                            return <Notification {...props} />;
                        })}
                    </Stack>
                </Overlay>
            </Container>
        </NotificationContext.Provider>
    );
};
