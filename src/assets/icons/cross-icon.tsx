import React from 'react';
import { mapRoleToBackgroundColor } from '../../components/layout/background';
export const CrossIcon = (props) => {
    const { role, height, width } = props;
    return (
        <svg
            width={width || 6}
            height={height || 6}
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.707 4.293a.999.999 0 11-1.414 1.414L3 4.414 1.707 5.707a.997.997 0 01-1.414 0 .999.999 0 010-1.414L1.586 3 .293 1.707A.999.999 0 111.707.293L3 1.586 4.293.293a.999.999 0 111.414 1.414L4.414 3l1.293 1.293z"
                fill={role ? mapRoleToBackgroundColor(role) : '#fff'}
            />
        </svg>
    );
};
