import React, {
    createContext,
    FC,
    useCallback,
    useContext,
    useState,
} from 'react';
import { AlertCircleIcon } from '../assets';
import {
    Button,
    Center,
    Margin,
    Modal,
    Padding,
    Queue,
    Stack,
    Text,
    ModalContext,
} from '../components';
import { AsyncButton } from '../components/button/async-button';

interface ConfirmationState {
    message?: string;
    onAffirm?: () => Promise<any>;
    onReject?: () => any;
}
const ConfirmationContext = createContext({
    onConfirm: (props: ConfirmationState) => {},
});
const ConfirmationModal: FC = ({ children }) => {
    const [state, setState] = useState<ConfirmationState>({});
    const { message, onAffirm, onReject } = state;
    const { visible, setVisible } = useContext(ModalContext);

    const onConfirm = (props) => {
        setState(props);
        setVisible(true);
    };

    const handleAffirm = useCallback(async () => {
        onAffirm && (await onAffirm());
        setVisible(false);
    }, [onAffirm, setVisible]);

    return (
        <ConfirmationContext.Provider value={{ onConfirm }}>
            {children}
            <Modal.Content>
                <Padding size={[7, 8, 6, 8]}>
                    <Stack size={5}>
                        <Center>
                            <AlertCircleIcon/>
                        </Center>
                        <Stack size={2}>
                            <Text type="primary1" alignment="center">
                                Confirmation
                            </Text>
                            <Text
                                type="primary5"
                                alignment="center"
                                role="tertiary"
                            >
                                {message || 'Are you sure ?'}
                            </Text>
                        </Stack>
                        <Margin size={4}>
                            <Queue size={3} justifyContent="center">
                                <AsyncButton
                                    type="secondary"
                                    onClick={handleAffirm}
                                >
                                    Yes
                                </AsyncButton>
                                <Modal.Trigger>
                                    <Button
                                        onClick={onReject}
                                        role="secondary"
                                        backgroundHoverColor="gray"
                                    >
                                        No
                                    </Button>
                                </Modal.Trigger>
                            </Queue>
                        </Margin>
                    </Stack>
                </Padding>
            </Modal.Content>
        </ConfirmationContext.Provider>
    );
};
export const ConfirmationContextProvider: FC = ({ children }) => {
    return (
        <Modal.Provider>
            <ConfirmationModal>{children}</ConfirmationModal>
        </Modal.Provider>
    );
};

export const useConfirmation = () => {
    return useContext(ConfirmationContext);
};
