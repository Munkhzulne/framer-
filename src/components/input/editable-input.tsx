import { Field } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import { EditIcon } from '../../assets';
import { TextTypeStyle, TextStyle } from '../basic/text';
import { Center, mapRoleToBackgroundColor, Overlay, Padding } from '../layout';
import { FormInputProps } from './form-input';
import { TextEntryStyle } from './input';

const RawEditableInput: FC<FormInputProps> = (props) => {
    return (
        <Padding size={[3, 0]} height="100%">
            <Overlay relative height="100%">
                <Padding size={[0, 6, 0, 4]} width="100%">
                    <Field {...props} />
                </Padding>
                <Overlay right={4} top={0} bottom={0}>
                    <Center>
                        <EditIcon />
                    </Center>
                </Overlay>
            </Overlay>
        </Padding>
    );
};

export const EditableInput: FC<
    FormInputProps & { type?: TextTypeStyle }
> = styled(RawEditableInput)`
    ${TextEntryStyle}
    ${TextStyle}
    height: 100%;
    :hover {
        background-color: ${mapRoleToBackgroundColor('tertiary')};
    }
`;
