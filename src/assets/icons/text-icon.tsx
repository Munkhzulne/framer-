
import React from 'react';
import { mapRoleToBackgroundColor } from '../../components';

export const TextIcon = (props) => {
    const { height, width, role } = props;
    return (
        <svg width={width || 19} height={height || 21} viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 3.17143V1H18V3.71429" stroke="white" stroke-width="2"/>
        <path d="M8.79183 1V20M8.79183 20H3.8335M8.79183 20H13.7502" stroke="white" stroke-width="2"/>
        </svg>
        
    );
};