import React from 'react';
import { mapRoleToTextColor } from '../../components';

export const CheckMarkIconFull = (props) => {
    const { role, width = 12, height = 8 } = props;
    return (
        <svg
            width={width || 12}
            height={height || 8}
            viewBox="0 0 12 8"
            fill="none"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.575 8a.667.667 0 01-.486-.21L.847 4.337a.666.666 0 11.971-.912l2.75 2.927L10.174.217a.667.667 0 01.984.899L5.067 7.783A.665.665 0 014.58 8h-.005z"
                fill={role ? mapRoleToTextColor(role) : '#5A48E7'}
            />
        </svg>
    );
};
