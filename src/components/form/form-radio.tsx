import {
    FormControlLabel,
    Radio,
    RadioGroup,
    makeStyles,
} from '@material-ui/core';
import React from 'react';
import { Text } from '../basic';
import { mapRoleToBackgroundColor, Queue, Stack } from '../layout';
import _ from 'lodash';
import { useField } from 'formik';

const useStyles = makeStyles({
    label: {
        fontSize: 14,
    },
});

export const FormRadio = (props) => {
    const { label, values, name } = props;
    const [data, meta, helpers] = useField({ name });
    const classes = useStyles();
    const onChange = (event) => {
        const { value } = event.target;
        helpers.setValue(value);
    };
    return (
        <Stack size={0}>
            <Text>{label}</Text>
            <RadioGroup onChange={onChange}>
                <Queue>
                    {values &&
                        values.map((value) => {
                            return (
                                <FormControlLabel
                                    value={value}
                                    classes={{ label: classes.label }}
                                    control={
                                        <Radio
                                            style={{
                                                color: mapRoleToBackgroundColor(
                                                    'secondary'
                                                ),
                                            }}
                                        />
                                    }
                                    label={value}
                                />
                            );
                        })}
                </Queue>
            </RadioGroup>
        </Stack>
    );
};
