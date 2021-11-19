import { navigate } from 'gatsby';
import _ from 'lodash';
import React, { useContext } from 'react';
import { Grid, Text } from '../..';
import { Border, Padding, Queue } from '../../components';
import { TimeAgo } from '../../components/basic/time';
import { DeleteButton } from '../../components/button';
import { NotificationContext } from '../../notifications';
import { useConfirmation } from '../../confirmation/confirmation-provider';
import { useModifyTemplate } from '../providers';

export const TemplatePreviewHeader = () => {
    return (
        <Border borderSize={[0, 0, 1]} role="primary">
            <Padding size={[4, 0]}>
                <Grid columns={[6, 6, 6, 6]} align="center">
                    <Text>Name</Text>
                    <Text alignment="center">Created</Text>
                    <Text alignment="center">Edited</Text>
                    <Text>Actions</Text>
                </Grid>
            </Padding>
        </Border>
    );
};

export const TemplatePreview = ({ template }) => {
    let { removeTemplate } = useModifyTemplate();
    let { id, name, updatedAt, createdAt, status } = template || {};

    const goToTemplate = () => {
        navigate(`/template?id=${id}`);
    };
    const { useAsyncNotification } = useContext(NotificationContext);
    const removeTemplateById = useAsyncNotification(
        'Removed template',
        async () => {
            await removeTemplate(id);
        }
    );
    const { onConfirm } = useConfirmation();
    const onRemoveReplicationClick = () => {
        onConfirm({
            message: `Are you sure to delete "${name || 'No name'}" template?`,
            onAffirm: removeTemplateById,
        });
    };
    return (
        <Grid columns={[6, 6, 6, 6]} align="center">
            <Text onClick={goToTemplate} underlined>
                {name || 'No name'}
            </Text>
            <Text type="tertiary1" alignment="center">
                {createdAt ? (
                    <TimeAgo serverTimestamp={createdAt} />
                ) : (
                    'Not available'
                )}
            </Text>
            <Text type="tertiary1" alignment="center">
                {createdAt || updatedAt ? (
                    <TimeAgo serverTimestamp={updatedAt || createdAt } />
                ) : (
                    'Not available'
                )}
            </Text>
            <Queue size={3}>
                <DeleteButton
                    data-test="remove-replication"
                    onClick={onRemoveReplicationClick}
                />
            </Queue>
        </Grid>
    );
};
