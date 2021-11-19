import React from 'react';
import { mapRoleToBackgroundColor } from '../../components/layout/background';
export const DangerIcon = (props) => {
    const { role, height, width } = props;
    return (
        <svg
            width={width || 20}
            height={height || 20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M10 0C4.475 0 0 4.475 0 10s4.475 10 10 10 10-4.475 10-10S15.525 0 10 0zM2 10c0-4.42 3.58-8 8-8a7.97 7.97 0 014.9 1.685L3.685 14.9A7.97 7.97 0 012 10zm8 8a7.97 7.97 0 01-4.9-1.685L16.315 5.1A7.97 7.97 0 0118 10c0 4.42-3.58 8-8 8z"
                fill={role ? mapRoleToBackgroundColor(role || 'dark') : '#000'}
            />
        </svg>
    );
};
