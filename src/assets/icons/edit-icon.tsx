import React from 'react';
import { mapRoleToBackgroundColor } from '../../components/layout/background';
export const EditIcon = (props) => {
    const { height, width, role } = props;
    return (
        <svg
            width="25"
            height="25"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                opacity='1'
                x="0.5"
                y="0.5"
                width="31"
                height="31"
                rx="1.5"
                stroke="white"
            />
            <path
                d="M18.1547 11.488L20.512 13.8453L18.1547 11.488ZM19.1547 10.488C19.4673 10.1754 19.8912 9.99979 20.3333 9.99979C20.7754 9.99979 21.1994 10.1754 21.512 10.488C21.8246 10.8006 22.0002 11.2246 22.0002 11.6667C22.0002 12.1088 21.8246 12.5327 21.512 12.8453L12.3333 22.024H10V19.6427L19.1547 10.488V10.488Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};
