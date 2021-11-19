import React from 'react';
import { mapRoleToBackgroundColor } from '../../components';

export const InfoIcon = (props) => {
    const { height, width, role } = props;
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
                d="M11 8a1 1 0 112 0 1 1 0 01-2 0zm0 3a1 1 0 012 0v5a1 1 0 01-2 0v-5zm1 9c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-18C6.477 2 2 6.477 2 12s4.477 10 10 10c5.522 0 10-4.477 10-10S17.522 2 12 2z"
                fill={mapRoleToBackgroundColor(role || 'light')}
            />
            <mask
                id="prefix__a"
                maskUnits="userSpaceOnUse"
                x={2}
                y={2}
                width={20}
                height={20}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11 8a1 1 0 112 0 1 1 0 01-2 0zm0 3a1 1 0 012 0v5a1 1 0 01-2 0v-5zm1 9c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-18C6.477 2 2 6.477 2 12s4.477 10 10 10c5.522 0 10-4.477 10-10S17.522 2 12 2z"
                    fill="#fff"
                />
            </mask>
        </svg>
    );
};
