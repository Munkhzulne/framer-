import React from 'react';
import { mapRoleToBackgroundColor } from '../../components/layout/background';
export const ElementIcon = (props) => {
    const { role, height, width } = props;
    return (
        <svg
            width={width || 24}
            height={height || 26}
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M13.3333 10.3333V1L1.33325 15.6667H10.6666V25L22.6666 10.3333H13.3333Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};
