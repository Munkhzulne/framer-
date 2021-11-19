import React, { FC } from 'react';
import { ColorType } from '../../components';
import { mapColorToBackground } from '../../components/layout/background';

type CloseCircleIconType = {
    color?: ColorType;
    height?: string | number;
    width?: string | number;
    className?: any;
};

export const CloseCircleIcon: FC<CloseCircleIconType> = (props: any) => {
    const { color, className, ...rest } = props;
    return (
        <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.707 13.293a.999.999 0 11-1.414 1.414L12 13.414l-1.293 1.293a.997.997 0 01-1.414 0 .999.999 0 010-1.414L10.586 12l-1.293-1.293a.999.999 0 111.414-1.414L12 10.586l1.293-1.293a.999.999 0 111.414 1.414L13.414 12l1.293 1.293zM12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"
                fill={color ? mapColorToBackground(color) : '#D8DCE8'}
                className={className}
            />
            <mask
                id="prefix__a"
                maskUnits="userSpaceOnUse"
                x={2}
                y={2}
                width={20}
                height={20}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.707 13.293a.999.999 0 11-1.414 1.414L12 13.414l-1.293 1.293a.997.997 0 01-1.414 0 .999.999 0 010-1.414L10.586 12l-1.293-1.293a.999.999 0 111.414-1.414L12 10.586l1.293-1.293a.999.999 0 111.414 1.414L13.414 12l1.293 1.293zM12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"
                    fill="#fff"
                    className={className}
                />
            </mask>
        </svg>
    );
};
