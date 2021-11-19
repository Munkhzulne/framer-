import React from 'react';
import { mapRoleToBackgroundColor } from '../../components/layout/background';

export const CircleIcon = (props) => {
    const { height, width, role } = props;
    return (
        <svg
            width={width || 60}
            height={height || 60}
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="1.5"
                y="1.5"
                width="47"
                height="47"
                rx="23.5"
                stroke="#D5D5D5"
                stroke-width="3"
            />
        </svg>
    );
};
