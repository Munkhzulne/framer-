import React from 'react';
import { Overlay, Padding } from '../../../components';
import { ShapeSettings } from './settings';

export const ElementsTool = () => {
    return (
        <Overlay height="100%" backgroundColor="dark" width="100%">
            <Padding size={6}>
                <ShapeSettings />
            </Padding>
        </Overlay>
    );
};
