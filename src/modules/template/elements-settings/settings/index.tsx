import { Link, navigate } from 'gatsby';
import React, { useContext, useState, useEffect } from 'react';
import { Box, Center, Stack, Text } from '../../../..';
import { FabricContext } from '../../../fabric/fabric-provider';
import _ from 'lodash';
import { BasicSettings } from './basic-settings';
import { TextSettings } from './text-settings';

export const ShapeSettings = () => {
    const { canvas, activeObject, setActiveObject } = useContext(
        FabricContext
    );
    let { type: activeObjectType } = activeObject || {};
    console.log(activeObject)
    if (!activeObject || _.isEqual(activeObject?.type, 'activeSelection')) {
        return (
            <Stack size={2}>
                <Text role="light" type="heading2">
                    Settings
                </Text>
                <Text role="primary" type="primary6">
                    Select object to edit
                </Text>
            </Stack>
        );
    }
    console.log(_.isEqual(activeObjectType, 'textbox'));
    return (
        <Stack size={5} width="100%">
            {_.isEqual(activeObjectType, 'textbox') ? (
                <>
                    <Text role="light" type="heading2">
                        Text settings
                    </Text>
                    <TextSettings />
                </>
            ) : (
                <Text role="light" type="heading2">
                    Shape settings
                </Text>
            )}
            <BasicSettings />
        </Stack>
    );
};
