import React from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { useField } from 'formik';
import { Text } from '../basic';
import { mapRoleToBackgroundColor } from '../layout';

export const FormCheckbox = (props) => {
    const { label, name } = props;
    const [data, meta, helpers] = useField({ name });
    const onChange = (_e: any, value: any) => {
        helpers.setValue(value);
    };
    return (
        <FormControlLabel
            label={<Text>{label}</Text>}
            onChange={onChange}
            control={
                <Checkbox
                    style={{
                        color: mapRoleToBackgroundColor('secondary'),
                    }}
                />
            }
        />
    );
};
