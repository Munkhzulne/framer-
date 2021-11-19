import React from 'react';

import { mapRoleToBackgroundColor } from '../../components/layout/background';
export const TriangleButtonIcon = ({ role, height, width, ...props }) => {
    return (
        <svg
            width={width || 7}
            height={height || 10}
            viewBox="0 0 7 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.48 6.179l-3.642 3.37A1.698 1.698 0 011.681 10a1.74 1.74 0 01-.693-.145A1.607 1.607 0 010 8.37V1.63C0 .981.378.41.988.146a1.71 1.71 0 011.851.306l3.641 3.37C6.811 4.127 7 4.557 7 5c0 .444-.189.873-.52 1.179"
                fill="#fff"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 7.6L4.809 5 2 2.4v5.2z"
                fill={role ? mapRoleToBackgroundColor(role) : '#D8DCE8'}
            />
        </svg>
    );
};
