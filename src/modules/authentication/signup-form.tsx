import { Form, Formik } from 'formik';
import { Link } from 'gatsby';
import React from 'react';
import * as Yup from 'yup';
import zxcvbn from 'zxcvbn';
import {
    Button,
    FormInput,
    PasswordInput,
    Stack,
    Text,
} from '../../components';
import { useFirebase, useFirestoreCollection } from '../../firebase';
import { useErrorNotification } from '../../notifications';

export const SignUpForm = () => {
    let { auth } = useFirebase();
    let { createRecordWithId: createUserDoc } = useFirestoreCollection(
        'accounts'
    );
    const onError = useErrorNotification();
    const onSubmit = async ({ email, password, lastName, firstName }) => {
        try {
            let {
                user: { uid },
            } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserDoc({ firstName, lastName }, uid);
        } catch (error) {
            onError(error);
        }
    };
    return (
        <Formik
            initialValues={{
                password: '',
                email: '',
                lastName: '',
                firstName: '',
            }}
            validationSchema={Yup.object().shape({
                password: Yup.string()
                    // .required('Нууц үгээ оруулна уу.')
                    .required('Please enter password.')
                    .test({
                        test: (value) => {
                            let { score } = zxcvbn(value || '');
                            return score > 3;
                        },
                        // message: 'Илүү хүчтэй хууц үг оруулна уу.',
                        message: 'Please enter strong password',
                    }),
                email: Yup.string()
                    // .email('Зөв имэйл хаяг оруулна уу.')
                    // .required('Имэйл хаягаа оруулна уу.'),
                    .email('Please enter valid email')
                    .required('Please enter email address'),
                lastName: Yup.string()
                    // .required('Овгоо оруулна уу.'),
                    .required('Please enter your lastname'),
                firstName: Yup.string()
                    // .required('Нэрээ оруулна уу.'),
                    .required('Please enter your firstname'),
            })}
            onSubmit={onSubmit}
        >
            {({ isSubmitting, handleSubmit, isValid, dirty }) => (
                <Form>
                    <Stack size={5}>
                        <Text type="heading3">
                            {/* Бүртгүүлэх */}
                            Create an account
                        </Text>
                        <FormInput
                            name="firstName"
                            // label="Нэр"
                            // placeholder="Нэр"
                            label="Firstname"
                            placeholder="Firstname"
                        />
                        <FormInput
                            name="lastName"
                            // label="Овог"
                            // placeholder="Овог"
                            label="Lastname"
                            placeholder="Lastname"
                        />
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
                            placeholder="Stronger password helps secure your account"
                            showIndicator={true}
                        />
                        <Button
                            type="primary"
                            onClick={handleSubmit}
                            loading={isSubmitting}
                            disabled={!dirty || !isValid}
                        >
                            {/* Бүртгүүлэх */}
                            Sign Up
                        </Button>
                    </Stack>
                </Form>
            )}
        </Formik>
    );
};
