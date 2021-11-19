import React from 'react';
import { mapRoleToBackgroundColor } from '../../components';

export const FailureSlashIcon = (props) => {
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
                d="M4 12c0-1.846.635-3.542 1.688-4.897l11.209 11.209A7.948 7.948 0 0112 20c-4.411 0-8-3.589-8-8zm16 0a7.954 7.954 0 01-1.688 4.897L7.103 5.688A7.948 7.948 0 0112 4c4.411 0 8 3.589 8 8zM12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"
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
                    d="M4 12c0-1.846.635-3.542 1.688-4.897l11.209 11.209A7.948 7.948 0 0112 20c-4.411 0-8-3.589-8-8zm16 0a7.954 7.954 0 01-1.688 4.897L7.103 5.688A7.948 7.948 0 0112 4c4.411 0 8 3.589 8 8zM12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"
                    fill="#fff"
                />
            </mask>
        </svg>
    );
};
