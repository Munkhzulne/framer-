import React from 'react';
import {
    Border,
    Button,
    FormInput,
    Grid,
    Padding,
    Stack,
    Text,
} from '../../components';
import { Sidebar } from '../../components/settings-sidebar';
import { SecurePage } from '../../navigation';
import * as Yup from 'yup';
import zxcvbn from 'zxcvbn';
import { Form, Formik } from 'formik';
import { useFirestoreDocument, useUser } from '../../firebase';

const Page = () => {
    let { user } = useUser();
    let { uid } = user || {};
    let { data: userData, updateRecord } = useFirestoreDocument('accounts', uid);
    console.log(userData)
    const onSubmit = async ({firstName, lastName}) => {
        await updateRecord({firstName, lastName});
    };
    return (
        <Padding size={[8, 0]}>
            <Grid columns={[1, 4]} space={15}>
                <Sidebar type="profile" />
                <Border>
                    <Text type="heading1">Profile</Text>
                    <Formik
                        initialValues={{
                            lastName: userData && (userData.lastName || ''),
                            firstName: userData && (userData.firstName || ''),
                        }}
                        validationSchema={Yup.object().shape({
                            lastName: Yup.string(),
                            firstName: Yup.string(),
                        })}
                        onSubmit={onSubmit}
                        enableReinitialize
                    >
                        {({ isSubmitting, handleSubmit }) => (
                            <Form>
                                <Padding size={[5, 10, 0, 0]}>
                                    <Stack size={5}>
                                        <FormInput
                                            name="firstName"
                                            label="Firstname"
                                            placeholder="Firstname"
                                        />
                                        <FormInput
                                            name="lastName"
                                            label="Lastname"
                                            placeholder="Lastname"
                                        />
                                        <Button
                                            type="primary"
                                            onClick={handleSubmit}
                                            loading={isSubmitting}
                                        >
                                            Save
                                        </Button>
                                    </Stack>
                                </Padding>
                            </Form>
                        )}
                    </Formik>
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
