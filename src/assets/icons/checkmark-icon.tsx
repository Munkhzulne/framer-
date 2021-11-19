import React from 'react';
import { mapRoleToTextColor } from '../../components/basic/text';

export const CheckMarkIcon = (props) => {
    const { role, width, height } = props;
    return (
        <svg
            width={width || 24}
            height={height || 24}
            viewBox="0 0 24 24"
            fill="#5A48E7"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.863 18a1 1 0 01-.729-.315l-4.863-5.179a1 1 0 111.457-1.369l4.125 4.391 8.408-9.202a1 1 0 011.477 1.348l-9.137 10a.998.998 0 01-.73.326h-.008z"
                fill={role ? mapRoleToTextColor(role) : '#5A48E7'}
            />
            <mask
                id="prefix__a"
                maskUnits="userSpaceOnUse"
                x={4}
                y={6}
                width={16}
                height={12}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.863 18a1 1 0 01-.729-.315l-4.863-5.179a1 1 0 111.457-1.369l4.125 4.391 8.408-9.202a1 1 0 011.477 1.348l-9.137 10a.998.998 0 01-.73.326h-.008z"
                    fill="#5A48E7"
                />
            </mask>
        </svg>
    );
};
