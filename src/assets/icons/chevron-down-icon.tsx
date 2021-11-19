import React from 'react';
import { mapRoleToBackgroundColor } from '../../components/layout/background';

export const ChevronDownIcon = (props) => {
    const { role, width, height } = props;
    return (
        <svg
            {...props}
            width={width || 24}
            height={height || 24}
            viewBox="0 0 24 24"
            fill="none"
        >
            <g>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 15.5C11.744 15.5 11.488 15.402 11.293 15.207L7.29301 11.207C6.90201 10.816 6.90201 10.184 7.29301 9.79301C7.68401 9.40201 8.31601 9.40201 8.70701 9.79301L12.012 13.098L15.305 9.91801C15.704 9.53501 16.335 9.54601 16.719 9.94301C17.103 10.34 17.092 10.974 16.695 11.357L12.695 15.219C12.5 15.407 12.25 15.5 12 15.5Z"
                    fill={mapRoleToBackgroundColor(role || 'primary')}
                />
                <mask x="6" y="9" width="11" height="7">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 15.5C11.744 15.5 11.488 15.402 11.293 15.207L7.29301 11.207C6.90201 10.816 6.90201 10.184 7.29301 9.79301C7.68401 9.40201 8.31601 9.40201 8.70701 9.79301L12.012 13.098L15.305 9.91801C15.704 9.53501 16.335 9.54601 16.719 9.94301C17.103 10.34 17.092 10.974 16.695 11.357L12.695 15.219C12.5 15.407 12.25 15.5 12 15.5Z"
                        fill="white"
                    />
                </mask>
            </g>
        </svg>
    );
};
