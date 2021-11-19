import React, { useEffect, useRef, useContext, useState } from 'react';
import { EditIcon } from '../../../assets';
import { Input, LoadingDots, Padding, Queue } from '../../../components';
import { ModifyTemplateContext } from '../../providers';
export const useOutsideClick = (ref, callback) => {
    const handleClick = (e) => {
        if (!ref.current) {
            return;
        }
        if (ref.current.contains(e.target)) {
            return;
        }

        callback();
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClick, true);
        return () => {
            document.removeEventListener('mousedown', handleClick, true);
        };
    }, [ref, callback]);
};
export const TemplateName = () => {
    const { templateData, updateTemplateDoc } = useContext(
        ModifyTemplateContext
    );
    const { name: templateName } = templateData || {};
    let [editing, setEditing] = useState(false);
    let [loading, setLoading] = useState(false);
    let [value, setValue] = useState('');
    let element = useRef();
    useOutsideClick(element, () => {
        setEditing(false);
        save();
    });
    const onChange = (value) => {
        setValue(value);
    };
    useEffect(() => {
        setValue(templateName);
    }, [templateName]);
    const save = async () => {
        if (value != templateName) {
            setLoading(true);
            await updateTemplateDoc({ name: value });
            setLoading(false);
        }
        setEditing(false);
    };
    return (
        <div ref={element} onClick={() => setEditing(true)}>
            <Queue alignItems="end" justifyContent="end" size={2}>
                <Input
                    onChange={onChange}
                    value={value}
                    onKeyPress={({ key }) => {
                        key == 'Enter' && save();
                    }}
                    onBlur={save}
                />

                {loading ? (
                    <LoadingDots />
                ) : (
                    <Padding size={[4, 0, 0, 0]}>
                        <EditIcon />
                    </Padding>
                )}
            </Queue>
        </div>
    );
};
