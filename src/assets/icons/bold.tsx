import React from 'react';
import { mapRoleToBackgroundColor } from '../../components/layout/background';

export const Bold = (props) => {
    const { role, width, height } = props;
    return (
        <svg
            width="13"
            height="13"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18.2589 12.125C19.9822 10.9196 21.2054 8.9732 21.2054 7.14282C21.2054 3.1161 18.0893 0 14.0625 0H2.90186V25H15.4733C19.2143 25 22.0983 21.9643 22.0983 18.2322C22.0982 15.5179 20.5536 13.2053 18.2589 12.125ZM8.25899 4.46425H13.6161C15.0983 4.46425 16.2947 5.66065 16.2947 7.14282C16.2947 8.62499 15.0983 9.82139 13.6161 9.82139H8.25899V4.46425ZM14.5089 20.5357H8.25899V15.1785H14.509C15.9912 15.1785 17.1876 16.3749 17.1876 17.8571C17.1876 19.3393 15.9911 20.5357 14.5089 20.5357Z"
                fill="white"
            />
        </svg>
    );
};
