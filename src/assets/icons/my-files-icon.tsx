import React from 'react';
import { mapRoleToBackgroundColor } from '../../components';

export const MyFilesIcon = (props) => {
    const { height, width, role } = props;
    return (
        <svg
            width={width || 26}
            height={width || 22}
            viewBox="0 0 26 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1 4.33333V17.6667C1 18.3739 1.28095 19.0522 1.78105 19.5523C2.28115 20.0524 2.95942 20.3333 3.66667 20.3333H22.3333C23.0406 20.3333 23.7189 20.0524 24.219 19.5523C24.719 19.0522 25 18.3739 25 17.6667V7C25 6.29275 24.719 5.61448 24.219 5.11438C23.7189 4.61428 23.0406 4.33333 22.3333 4.33333H14.3333L11.6667 1.66666H3.66667C2.95942 1.66666 2.28115 1.94762 1.78105 2.44771C1.28095 2.94781 1 3.62609 1 4.33333V4.33333Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};
