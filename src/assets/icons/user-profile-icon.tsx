import React from 'react';
import { mapRoleToBackgroundColor } from '../../components/layout/background';
export const UserProfileIcon = (props) => {
    const { role, height, width } = props;
    return (
        <svg
            width={width || 24}
            height={height || 24}
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 17a1 1 0 11-2 0c0-2.757-2.243-5-5-5s-5 2.243-5 5a1 1 0 11-2 0c0-3.86 3.141-7 7-7s7 3.14 7 7zM7 2c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0 6c2.206 0 4-1.794 4-4S9.206 0 7 0 3 1.794 3 4s1.794 4 4 4z"
                fill={role ? mapRoleToBackgroundColor(role) : '#9EA7BC'}
            />
        </svg>
    );
};
