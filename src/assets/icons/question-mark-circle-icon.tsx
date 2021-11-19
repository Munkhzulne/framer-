import React from 'react';
import { mapRoleToBackgroundColor } from '../../components/layout/background';
export const QuestionMarkCircleIcon = (props) => {
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.5 9.5C8.5 7.57 10.07 6 12 6s3.5 1.57 3.5 3.5c0 1.58-1.06 2.903-2.5 3.337V14a1 1 0 11-2 0v-2a1 1 0 011-1c.827 0 1.5-.673 1.5-1.5S12.827 8 12 8s-1.5.673-1.5 1.5a1 1 0 11-2 0zM11 17a1 1 0 112 0 1 1 0 11-2 0zm1 3c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-18C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"
                fill={role ? mapRoleToBackgroundColor(role) : '#9EA7BC'}
            />
            <mask
                id="prefix__a"
                maskUnits="userSpaceOnUse"
                x={2}
                y={2}
                width={20}
                height={20}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.5 9.5C8.5 7.57 10.07 6 12 6s3.5 1.57 3.5 3.5c0 1.58-1.06 2.903-2.5 3.337V14a1 1 0 11-2 0v-2a1 1 0 011-1c.827 0 1.5-.673 1.5-1.5S12.827 8 12 8s-1.5.673-1.5 1.5a1 1 0 11-2 0zM11 17a1 1 0 112 0 1 1 0 11-2 0zm1 3c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-18C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"
                    fill="#fff"
                />
            </mask>
        </svg>
    );
};
