import React from 'react';
import { mapRoleToBackgroundColor } from '../../components/layout/background';

type closeIconType = {
    onClick?: () => void;
    role?: string;
    width?: number;
    height?: number;
};

export const CloseIcon = ({ width, height, role, ...props }: closeIconType) => {
    return (
        <svg
            width={width || 24}
            height={height || 24}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.414 12l4.293-4.293a.999.999 0 10-1.414-1.414L12 10.586 7.707 6.293a.999.999 0 10-1.414 1.414L10.586 12l-4.293 4.293a.999.999 0 101.414 1.414L12 13.414l4.293 4.293a.997.997 0 001.414 0 .999.999 0 000-1.414L13.414 12z"
                fill={
                    role
                        ? mapRoleToBackgroundColor(role || 'primary')
                        : '#2B6BEA'
                }
            />
            <mask
                id="prefix__a"
                maskUnits="userSpaceOnUse"
                x={5}
                y={5}
                width={14}
                height={13}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.414 12l4.293-4.293a.999.999 0 10-1.414-1.414L12 10.586 7.707 6.293a.999.999 0 10-1.414 1.414L10.586 12l-4.293 4.293a.999.999 0 101.414 1.414L12 13.414l4.293 4.293a.997.997 0 001.414 0 .999.999 0 000-1.414L13.414 12z"
                    fill="#fff"
                />
            </mask>
        </svg>
    );
};
