import { Form, Formik } from 'formik';
import React, { FC } from 'react';
import * as Yup from 'yup';
import {
    Button,
    FormInput,
    PasswordInput,
    Stack,
    Text,
} from '../../components';
import { useFirebase } from '../../firebase';
import { useErrorNotification } from '../../notifications';

export const LoginForm: FC = () => {
    let { auth } = useFirebase();
    let onError = useErrorNotification();
    const onSubmit = async ({ email, password }) => {
        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            onError(error);
        }
    };
    return (
        <Formik
            initialValues={{
                password: '',
                email: '',
            }}
            validationSchema={Yup.object().shape({
                password: Yup.string()
                    // .required('Нууц үгээ оруулна уу.'),
                    .required('Please enter password'),
                email: Yup.string()
                    // .email('Зөв имэйл хаяг оруулна уу.')
                    // .required('Имэйлээ оруулна уу.'),
                    .email('Please enter valid email')
                    .required('Please enter value'),
            })}
            onSubmit={onSubmit}
        >
            {({ isSubmitting, handleSubmit }) => (
                <Form>
                    <Stack size={4}>
                        <Text type="heading3">Log in to your account</Text>
                        {/* <Text type="heading3">Нэвтрэх</Text> */}
                        <FormInput
                            name="email"
                            // label="Имэйл хаяг"
                            label="Email address"
                            placeholder="example@example.com"
                        />

                        <PasswordInput
                            name="password"
                            // label="Нууц үг"
                            label="Password"
                            placeholder="Enter your password"
                        />
                        <Button
                            type="primary"
                            data-cy="login"
                            onClick={handleSubmit}
                            loading={isSubmitting}
                        >
                            {/* Нэвтрэх */}
                            Login
                        </Button>
                    </Stack>
                </Form>
            )}
        </Formik>
    );
};
