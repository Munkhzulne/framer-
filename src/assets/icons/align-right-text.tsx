import React from 'react';
import { mapRoleToBackgroundColor } from '../../components/layout/background';

export const AlignRightText = (props) => {
    const { role, width, height } = props;
    return (
        <svg
        width="18"
        height="18"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M24.2492 2.36487H0.750751C0.337838 2.36487 0 2.70271 0 3.11562C0 3.52853 0.337838 3.86637 0.750751 3.86637H24.2492C24.6622 3.86637 25 3.52853 25 3.11562C25 2.70271 24.6622 2.36487 24.2492 2.36487Z"
                fill="white"
            />
            <path
                d="M24.2493 8.5961H7.80788C7.39497 8.5961 7.05713 8.93394 7.05713 9.34685C7.05713 9.75976 7.39497 10.0976 7.80788 10.0976H24.2493C24.6622 10.0976 25.0001 9.75976 25.0001 9.34685C25.0001 8.93394 24.6622 8.5961 24.2493 8.5961Z"
                fill="white"
            />
            <path
                d="M24.2492 14.9024H0.750751C0.337838 14.9024 0 15.2402 0 15.6531C0 16.0661 0.337838 16.4039 0.750751 16.4039H24.2492C24.6622 16.4039 25 16.0661 25 15.6531C25 15.2402 24.6622 14.9024 24.2492 14.9024Z"
                fill="white"
            />
            <path
                d="M24.2494 21.1336H13.6638C13.2509 21.1336 12.9131 21.4715 12.9131 21.8844C12.9131 22.2973 13.2509 22.6351 13.6638 22.6351H24.2494C24.6623 22.6351 25.0002 22.2973 25.0002 21.8844C25.0002 21.4715 24.6623 21.1336 24.2494 21.1336Z"
                fill="white"
            />
        </svg>
    );
};
