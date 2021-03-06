import React from 'react';
import { mapRoleToBackgroundColor } from '../../components/layout/background';

export const AlignLeftIcon = (props) => {
    const { role, width, height } = props;
    return (
        <svg
            width="25"
            height="25"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M43.4953 10.5309H13.1732C12.4812 10.5309 11.915 11.0971 11.915 11.7891V20.9738C11.915 21.6658 12.4812 22.232 13.1732 22.232H43.4953C44.1873 22.232 44.7535 21.6658 44.7535 20.9738V11.7891C44.7535 11.0971 44.1873 10.5309 43.4953 10.5309ZM42.2371 19.8415H14.4314V13.0473H42.2371V19.8415Z"
                fill="white"
            />
            <path
                d="M34.3106 27.6422H13.1732C12.4812 27.6422 11.915 28.2083 11.915 28.9003V38.085C11.915 38.777 12.4812 39.3432 13.1732 39.3432H34.3106C35.0026 39.3432 35.5688 38.777 35.5688 38.085V28.9003C35.5688 28.2083 35.0026 27.6422 34.3106 27.6422ZM32.9266 36.9527H14.4314V30.1585H32.9266V36.9527Z"
                fill="white"
            />
            <path
                d="M6.50476 0C5.81276 0 5.24658 0.56618 5.24658 1.25818V48.7418C5.24658 49.4338 5.81276 50 6.50476 50C7.19676 50 7.76294 49.4338 7.76294 48.7418V1.25818C7.76294 0.56618 7.19676 0 6.50476 0Z"
                fill="white"
            />
        </svg>
    );
};
