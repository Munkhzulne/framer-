import React from 'react';
import { mapRoleToBackgroundColor } from '../../components/layout/background';

export const AlertIcon = (props) => {
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
                d="M11 9a1 1 0 012 0v4a1 1 0 01-2 0V9zm0 7a1 1 0 112 0 1 1 0 01-2 0zm9.865 2.353c-.23.405-.675.647-1.193.647H4.328c-.518 0-.964-.242-1.192-.647a.971.971 0 01.017-1.017l7.67-12.718c.468-.774 1.886-.774 2.353 0l7.672 12.718c.266.44.125.827.017 1.017zm1.696-2.05L14.889 3.584c-.6-.992-1.68-1.584-2.89-1.584-1.21 0-2.29.592-2.887 1.584L1.44 16.303a2.973 2.973 0 00-.046 3.033C1.973 20.363 3.098 21 4.328 21h15.344c1.23 0 2.355-.637 2.935-1.664.54-.956.523-2.09-.046-3.033z"
                fill={mapRoleToBackgroundColor(role || 'dark')}
            />
            <mask
                id="prefix__a"
                maskUnits="userSpaceOnUse"
                x={1}
                y={2}
                width={22}
                height={19}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11 9a1 1 0 012 0v4a1 1 0 01-2 0V9zm0 7a1 1 0 112 0 1 1 0 01-2 0zm9.865 2.353c-.23.405-.675.647-1.193.647H4.328c-.518 0-.964-.242-1.192-.647a.971.971 0 01.017-1.017l7.67-12.718c.468-.774 1.886-.774 2.353 0l7.672 12.718c.266.44.125.827.017 1.017zm1.696-2.05L14.889 3.584c-.6-.992-1.68-1.584-2.89-1.584-1.21 0-2.29.592-2.887 1.584L1.44 16.303a2.973 2.973 0 00-.046 3.033C1.973 20.363 3.098 21 4.328 21h15.344c1.23 0 2.355-.637 2.935-1.664.54-.956.523-2.09-.046-3.033z"
                    fill="#fff"
                />
            </mask>
        </svg>
    );
};
