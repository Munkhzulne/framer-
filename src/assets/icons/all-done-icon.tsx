import React from 'react';
import { mapRoleToBackgroundColor } from '../../components';

export const AllDoneIcon = (props) => {
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
                d="M16.616 6.213a.998.998 0 00-1.403.17l-7.055 9.009-3.379-4.197a1 1 0 00-1.559 1.254l4.17 5.178c.19.236.476.373.78.373h.006a.998.998 0 00.78-.384l7.831-10a.998.998 0 00-.17-1.403zm5 0a.998.998 0 00-1.403.17l-7.055 9.009-.604-.75-1.265 1.618 1.1 1.367c.191.236.477.373.78.373h.007a.998.998 0 00.78-.384l7.831-10a.998.998 0 00-.17-1.403zM9.98 11.444L8.713 13.06l-.492-.61a1 1 0 011.558-1.255l.2.25z"
                fill={mapRoleToBackgroundColor(role || 'light')}
            />
            <mask
                id="prefix__a"
                maskUnits="userSpaceOnUse"
                x={2}
                y={5}
                width={21}
                height={13}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.616 6.213a.998.998 0 00-1.403.17l-7.055 9.009-3.379-4.197a1 1 0 00-1.559 1.254l4.17 5.178c.19.236.476.373.78.373h.006a.998.998 0 00.78-.384l7.831-10a.998.998 0 00-.17-1.403zm5 0a.998.998 0 00-1.403.17l-7.055 9.009-.604-.75-1.265 1.618 1.1 1.367c.191.236.477.373.78.373h.007a.998.998 0 00.78-.384l7.831-10a.998.998 0 00-.17-1.403zM9.98 11.444L8.713 13.06l-.492-.61a1 1 0 011.558-1.255l.2.25z"
                    fill="#fff"
                />
            </mask>
        </svg>
    );
};
