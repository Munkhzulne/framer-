import { Grid, GridList, GridListTile } from '@material-ui/core';
import React, { useContext, useEffect, useRef } from 'react';
import {
    Border,
    Button,
    Input,
    Padding,
    Queue,
    Stack,
    Text,
} from '../../../components';
import { FabricContext } from '../fabric-provider';
import styled from 'styled-components';
import { ModifyTemplateContext, useModifyTemplate } from '../../providers';
import { useFirebase } from '../../../firebase';
import { NotificationContext } from '../../../notifications';

const ImageContainer = styled.div`
    max-height: 100%;
    overflow-x: scroll;
    position: absolute
`;
export const FabricMyFiles = () => {
    const { storage } = useFirebase();
    const { assets, createAsset } = useModifyTemplate();
    const { useAsyncNotification } = useContext(NotificationContext);
    const { addSystemImage } = useContext(FabricContext);
    const fileInput = useRef();

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const a = useAsyncNotification('Uploaded photo', async () => {
                let thisRef = storage.child(file.name + Date.now().toString());
                await thisRef.put(file).then((snapshot) => {
                    snapshot.ref.getDownloadURL().then((downloadURL) => {
                        createAsset({ src: downloadURL, typeFile: file.type });
                    });
                });
            });
            a();
            document.getElementById('myFile').value = null;
        }
    };
    return (
        <ImageContainer>
        <Padding size={5}>
            <Stack size={5}>
                <Text role="light" type="primary3">
                    Click image to add to page
                </Text>
                <input
                    accept="image/*"
                    id="myFile"
                    ref={fileInput}
                    multiple
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    type="file"
                />
                <label htmlFor="myFile">
                    <Button role="secondary">
                        <Text role="light">Upload</Text>
                    </Button>
                </label>
                <GridList cellHeight="auto" cols={2}>
                    {assets.map((tile) => (
                        <GridListTile cols={tile.cols || 1}>
                            <Padding size={2}>
                                <Border onClick={() => addSystemImage(tile)}>
                                    <img
                                        src={tile.src}
                                        width="100%"
                                        height="auto"
                                    />
                                </Border>
                            </Padding>
                        </GridListTile>
                    ))}
                </GridList>
            </Stack>
        </Padding>
        </ImageContainer>
    );
};
