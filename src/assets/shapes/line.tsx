import React from 'react';
import { mapRoleToBackgroundColor } from '../../components/layout/background';

export const LineIcon = (props) => {
    const { height, width, role } = props;
    return (
        <svg
            width={width || 42}
            height={height || 60}
            viewBox="0 0 32 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <line
                x1="1.12135"
                y1="55.7285"
                x2="31.1214"
                y2="0.522528"
                stroke="#D5D5D5"
                stroke-width="3"
            />
        </svg>
    );
};
