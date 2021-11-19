import { ReactNode } from 'react';

export interface InputProps {
    ref?: any;
    name?: string;
    label?: string;
    value?: string;
    placeholder?: string;
    onChange?: any;
    loading?: boolean;
    error?: string;
    onClick?: any;
    rightIcon?: ReactNode;
    width?: string | number;
    textType?: any;
    labelType?: any;
    borderSize?: number[];
    type?: 'password' | 'text' | 'color' | 'number';
}
