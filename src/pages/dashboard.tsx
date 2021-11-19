import { navigate } from 'gatsby';
import _, { isEmpty, values } from 'lodash';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Padding, Queue, Stack, Text } from '..';
import { useModifyTemplate } from '../modules/providers';
import { PlusIcon } from '../assets';
import { Center, Grid } from '../components';
import { AsyncButton } from '../components/button/async-button';
import { useTemplates } from '../firebase/use-templates';
import {
    LoadingTemplates,
    TemplatePreview,
    TemplatePreviewHeader,
} from '../modules/dashboard';
import { EmptyDashboard } from '../modules/dashboard/empty-dashboard';
import { SecurePage } from '../navigation';

const DashboardWrapper = styled.div`
    height: auto;
    overflow-y: 'scroll';
`;

const TemplateDetail = () => {
    const { data, loading } = useTemplates();
    if (loading) {
        return (
            <Center height="100%">
                <LoadingTemplates />
            </Center>
        );
    }

    if (_.isEmpty(data) && !loading) {
        return (
            <Center>
                <EmptyDashboard />
            </Center>
        );
    }
    return (
        <Stack size={8}>
            <Stack size={6}>
                <TemplatePreviewHeader />
                {data?.map((template) => {
                    return (
                        <TemplatePreview
                            key={template?.id}
                            template={template}
                        />
                    );
                })}
            </Stack>
        </Stack>
    );
};
const Dashboard = () => {
    const { createTemplate, templates } = useModifyTemplate();
    const handleCreateReplication = async () => {
        let { id } = await createTemplate({ name: 'No name' });
        await navigate(`/template?id=${id}`);
    };
    return (
        <DashboardWrapper>
            <Padding size={[6, 0]}>
                <Grid columns={[2, 1]}>
                    <Stack size={6.5}>
                        <Queue size={4}>
                            <Text type="heading2">Templates</Text>
                            {!_.isEmpty(templates) && (
                                <AsyncButton
                                    role="secondary"
                                    backgroundHoverColor="gray"
                                    onClick={handleCreateReplication}
                                    rightIcon={<PlusIcon color="dark" />}
                                    data-test="click-outside"
                                >
                                    New
                                </AsyncButton>
                            )}
                        </Queue>
                        <TemplateDetail />
                    </Stack>
                </Grid>
            </Padding>
        </DashboardWrapper>
    );
};

const Page = () => {
    return (
        <SecurePage>
            <Dashboard />
        </SecurePage>
    );
};

export default Page;
