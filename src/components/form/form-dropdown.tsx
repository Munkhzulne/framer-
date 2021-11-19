import { MenuItem, Select, SelectProps } from '@material-ui/core';
import React from 'react';
import { Text } from '../basic';
import { Stack } from '../layout';
import _ from 'lodash';
import { useField } from 'formik';

type FormSelectType = SelectProps & {
    values: string[];
};

export const FormDropdown = (props: FormSelectType) => {
    const { label, values, name } = props;
    const [, , helpers] = useField({ name });
    const onChange = (event) => {
        const { value } = event.target;
        helpers.setValue(value);
    };
    return (
        <Stack size={0}>
            <Text>{label}</Text>
            <Select labelId="idempotence" label onChange={onChange}>
                {values &&
                    values.map((value) => {
                        return (
                            <MenuItem key={value} value={value}>
                                {_.upperCase(value)}
                            </MenuItem>
                        );
                    })}
            </Select>
        </Stack>
    );
};
