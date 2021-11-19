import React from 'react';
import { mapRoleToBackgroundColor } from '../../components/layout/background';

export const TriangleIcon = (props) => {
    const { height, width, role } = props;
    return (
        <svg
            width={width || 60}
            height={height || 60}
            viewBox="0 0 60 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.60167 50.3182L30 2.9938L57.3983 50.3182H2.60167Z"
                stroke="#D5D5D5"
                stroke-width="3"
            />
        </svg>
    );
};
