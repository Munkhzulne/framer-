import { Link, navigate } from 'gatsby';
import React, { useContext, useState, useEffect } from 'react';
import { Box, Center, Stack, Text } from '../../../..';
import {
    AlignLeftText,
    AlignTextCenter,
    Bold,
    Italic,
    Underline,
} from '../../../../assets';
import { Input, InteractiveIcon, Queue, Spacer } from '../../../../components';
import {
    getActiveStyle,
    setActiveProp,
    setActiveStyle,
} from '../../../fabric/utils';
import { FabricContext } from '../../../fabric/fabric-provider';
import _ from 'lodash';
import { MenuItem, Select, withStyles } from '@material-ui/core';
const CustomSelect = withStyles({
    root: {
        color: 'white',
    },
    selectMenu: {
        color: 'white',
        borderBottom: 'white 1px solid',
    },
    icon: {
        color: 'white'
    },
})(Select);
export const TextSettings = () => {
    const { canvas, activeObject, setActiveObject, editor } = useContext(
        FabricContext
    );

    const [options, setOptions] = useState({
        fontSize: 24,
        fontWeight: 'normal',
        fontStyle: 'normal',
        textAlign: 'center',
        fontFamily: 'arial',
        textDecoration: 'normal',
    });
    const updateFontSize = (e) => {
        setOptions({
            ...options,
            fontSize: e,
        });
        setActiveStyle('fontSize', parseInt(e, 10), activeObject);
    };

    const positionElement = (alignment) => {
        setOptions({
            ...options,
            textAlign: alignment,
        });
        setActiveProp('textAlign', alignment, activeObject);
    };
    const updateFontFamily = (e) => {
        setOptions({
            ...options,
            fontFamily: e.target.value,
        });
        setActiveProp('fontFamily', e.target.value, activeObject);
    };
    const updateBold = () => {
        const value = options.fontWeight === 'bold' ? 'normal' : 'bold';
        setOptions({
            ...options,
            fontWeight: value,
        });
        setActiveStyle('fontWeight', value, activeObject);
    };

    const updateItalic = () => {
        const value = options.fontStyle === 'italic' ? 'normal' : 'italic';
        setOptions({
            ...options,
            fontStyle: value,
        });
        setActiveStyle('fontStyle', value, activeObject);
    };

    const updateUnderline = (e) => {
        const value = options.textDecoration === 'underline' ? '' : 'underline';

        setOptions({
            ...options,
            textDecoration: value,
        });
        setActiveStyle('textDecoration', value, activeObject);
        setActiveStyle('underline', !!value.length, activeObject);
    };
    useEffect(() => {
        if (activeObject) {
            const activeOptions = {
                fontSize: getActiveStyle('fontSize', activeObject),
                fontWeight: getActiveStyle('fontWeight', activeObject),
                fontStyle: getActiveStyle('fontStyle', activeObject),
                textAlign: activeObject['textAlign'],
                fontFamily: getActiveStyle('fontFamily', activeObject),
                textDecoration: getActiveStyle('textDecoration', activeObject),
            };
            setOptions({ ...options, ...activeOptions });
        }
    }, [activeObject]);
    return (
        <Stack size={5} width="100%">
            <Queue size={4}>
                <Stack size={2} width={'100%'}>
                    <Text type={'primary5'} role="light">
                        Font family
                    </Text>
                    <CustomSelect
                        value={options.fontFamily}
                        onChange={updateFontFamily}
                    >
                        <MenuItem value="arial" >Arial</MenuItem>
                        <MenuItem value="comic sans ms">Comic Sans MS</MenuItem>
                        <MenuItem value="courier">Courier</MenuItem>
                        <MenuItem value="georgia" >Georgia</MenuItem>
                        <MenuItem value="helvetica">Helvetica</MenuItem>
                        <MenuItem value="impact">Impact</MenuItem>
                        <MenuItem value="plaster">Plaster</MenuItem>
                    </CustomSelect>
                </Stack>{' '}
                <Input
                    label="Font size"
                    type="number"
                    onChange={updateFontSize}
                    value={options.fontSize}
                />
            </Queue>
            <Queue size={6}>
                <Stack size={3}>
                    <Text role="light" type="primary5">
                        Text alignment
                    </Text>
                    <Queue size={5}>
                        <InteractiveIcon
                            onClick={() => {
                                positionElement('left');
                            }}
                        >
                            <AlignLeftText />
                        </InteractiveIcon>

                        <InteractiveIcon
                            onClick={() => {
                                positionElement('center');
                            }}
                        >
                            <AlignTextCenter />
                        </InteractiveIcon>
                        <InteractiveIcon
                            onClick={() => {
                                positionElement('right');
                            }}
                        >
                            <AlignLeftText />
                        </InteractiveIcon>
                    </Queue>
                </Stack>
                <Stack size={3}>
                    <Text role="light" type="primary5">
                        Text style
                    </Text>
                    <Queue size={5}>
                        <InteractiveIcon onClick={updateBold}>
                            <Bold />
                        </InteractiveIcon>

                        <InteractiveIcon onClick={updateItalic}>
                            <Italic />
                        </InteractiveIcon>
                        <InteractiveIcon onClick={updateUnderline}>
                            <Underline />
                        </InteractiveIcon>
                    </Queue>
                </Stack>
            </Queue>
        </Stack>
    );
};
