import React from 'react';
import { mapColorToBackground } from '../../components/layout/background';
export const PlusIcon = (props) => {
    const { height, width, color } = props;
    return (
        <svg
            width={width || 9}
            height={height || 9}
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M.528 3.72h3.024V.616h2.112V3.72h3.024v1.952H5.664v3.104H3.552V5.672H.528V3.72z"
                fill={mapColorToBackground(color || 'gray.50')}
            />
        </svg>
    );
};
