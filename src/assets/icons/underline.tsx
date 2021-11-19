import React from 'react';
import { mapRoleToBackgroundColor } from '../../components/layout/background';

export const Underline = (props) => {
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
                d="M12.4998 19.4445C17.104 19.4445 20.8332 15.7153 20.8332 11.1111V0H17.361V11.1111C17.361 13.7986 15.1873 15.9723 12.4998 15.9723C9.81234 15.9723 7.6387 13.7986 7.6387 11.1111V0H4.1665V11.1111C4.1665 15.7153 7.89567 19.4445 12.4998 19.4445Z"
                fill="white"
            />
            <path
                d="M22.2223 22.2222H2.77783V25H22.2223V22.2222Z"
                fill="white"
            />
        </svg>
    );
};
