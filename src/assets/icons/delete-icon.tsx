import React from 'react';
import { mapRoleToBackgroundColor } from '../../components/layout/background';
export const DeleteIcon = (props) => {
    const { role, height, width } = props;
    return (
        <svg
            width={width || 24}
            height={height || 24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.707 13.293a.999.999 0 11-1.414 1.414L12 13.414l-1.293 1.293a.997.997 0 01-1.414 0 .999.999 0 010-1.414L10.586 12l-1.293-1.293a.999.999 0 111.414-1.414L12 10.586l1.293-1.293a.999.999 0 111.414 1.414L13.414 12l1.293 1.293zM12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"
                fill={role ? mapRoleToBackgroundColor(role) : '#2B6BEA'}
            />
            <mask
                id="prefix__a"
                maskUnits="userSpaceOnUse"
                x={2}
                y={1}
                width={20}
                height={21}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.707 13.293a.999.999 0 11-1.414 1.414L12 13.414l-1.293 1.293a.997.997 0 01-1.414 0 .999.999 0 010-1.414L10.586 12l-1.293-1.293a.999.999 0 111.414-1.414L12 10.586l1.293-1.293a.999.999 0 111.414 1.414L13.414 12l1.293 1.293zM12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"
                    fill="#fff"
                />
            </mask>
        </svg>
    );
};
