import React from 'react';
import { mapRoleToBackgroundColor } from '../../components/layout/background';

export const RectangleIcon = (props) => {
    const { height, width, role } = props;
    return (
        <svg
            width={width || 60}
            height={height || 60}
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="1"
                y="1"
                width="58"
                height="58"
                stroke="#D5D5D5"
                stroke-width="3"
            />
        </svg>
    );
};
