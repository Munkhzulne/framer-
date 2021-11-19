import React from 'react';
import { mapRoleToBackgroundColor } from '../../components/layout/background';
export const WarningIcon = (props) => {
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
                d="M2.734 20L12 3.996 21.266 20H2.734z"
                stroke="#101216"
                strokeWidth={2}
            />
            <path
                d="M12.5 16.5v1h-1v-1h1zm0-6v3h-1v-3h1z"
                fill={role ? mapRoleToBackgroundColor(role) : '#F4C857'}
                stroke="#101216"
            />
        </svg>
    );
};
