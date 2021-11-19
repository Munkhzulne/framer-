import { Link, navigate } from 'gatsby';
import React, { useContext } from 'react';
import { Box, Center, Stack, Text } from '../..';
import EmptyStateIllustration from '../../assets/images/dashboard-empty-state.svg';
import { Padding } from '../../components';
import { AsyncButton } from '../../components/button/async-button';
import { useFirestoreCollection, useUser } from '../../firebase';

export const EmptyDashboard = () => {
    let { user } = useUser();
    let { uid } = user || {};
    let { createRecord } = useFirestoreCollection('accounts', uid, 'templates');
    const handleCreateReplication = async () => {
        let { id } = await createRecord({ name: 'No name' });
        await navigate(`/template?id=${id}`);
    };
    return (
        <Padding size={[8, 0]}>
            <Center width="100%">
                <Stack size={5}>
                    <Center>
                        <Box
                            ratio={0.8}
                            width={11}
                            image={EmptyStateIllustration}
                        ></Box>
                    </Center>
                    <Text type="primary3" alignment="center">
                        You haven’t created any templates yet.
                    </Text>
                    <Center>
                        <AsyncButton
                            onClick={handleCreateReplication}
                            role="secondary"
                            backgroundHoverColor="gray"
                        >
                            New Template
                        </AsyncButton>
                    </Center>
                </Stack>
            </Center>
        </Padding>
    );
};
