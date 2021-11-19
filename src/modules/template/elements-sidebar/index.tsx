import React from 'react';
import { Box, Center, Stack, Text } from '../../..';
import { ElementIcon, MyFilesIcon, TextIcon } from '../../../assets';
import {
    Border,
    Button,
    Grid,
    Overlay,
    Padding,
    Spacer,
} from '../../../components';
import { FabricShapes } from '../../fabric/elements';
import { FabricMyFiles } from '../../fabric/my-files';
import { FabricTexts } from '../../fabric/text';
import { VerticalTab } from './vertitcal-tab';

const ElementTabItem = ({ icon, name }) => {
    return (
        <Padding size={4}>
            <Stack size={3} alignVertical="center">
                <Center>{icon}</Center>
                <Text role="light" type="primary5" alignment="center">
                    {name}
                </Text>
            </Stack>
        </Padding>
    );
};
export const Elements = () => {
    return (
        <Overlay height="100%" backgroundColor="dark" >
            <VerticalTab.Provider defaultTab="elements">
                <Grid columns={[1, 4]} space={0} height="100%">
                    <div>
                        <VerticalTab.Item name="elements">
                            <ElementTabItem
                                icon={<ElementIcon />}
                                name="Elements"
                            />
                        </VerticalTab.Item>
                        <VerticalTab.Item name="text">
                            <ElementTabItem icon={<TextIcon />} name="Text" />
                        </VerticalTab.Item>
                        <VerticalTab.Item name="myFiles">
                            <ElementTabItem
                                icon={<MyFilesIcon />}
                                name="My files"
                            />
                        </VerticalTab.Item>
                    </div>
                    <Spacer height="100%">
                        <VerticalTab.Content name="elements">
                            <FabricShapes />
                        </VerticalTab.Content>
                        <VerticalTab.Content name="text">
                            <FabricTexts />
                        </VerticalTab.Content>
                        <VerticalTab.Content name="myFiles">
                            <FabricMyFiles />
                        </VerticalTab.Content>
                    </Spacer>
                </Grid>
            </VerticalTab.Provider>
        </Overlay>
    );
};
