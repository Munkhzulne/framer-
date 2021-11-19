import * as React from 'react';
export const NoDataReceivedIllustration = ({
    height,
    width,
    ...props
}: {
    height?: any;
    width?: any;
}) => {
    return (
        <svg
            width={width || 64}
            height={height || 64}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M60 13v38.1a2 2 0 01-2 1.9H6a2 2 0 01-2-1.9V13h56z"
                fill="#D8DCE8"
            />
            <path
                d="M55 10.9v32.39A5.82 5.82 0 0149.12 49H4V11h2v-.1h49z"
                fill="#F9FAFD"
            />
            <path d="M60 6v8H4V6a2 2 0 012-2h52a2 2 0 012 2z" fill="#2B6BEA" />
            <path
                d="M42 11a2 2 0 100-4 2 2 0 000 4zM48 11a2 2 0 100-4 2 2 0 000 4zM54 11a2 2 0 100-4 2 2 0 000 4zM9 8a1 1 0 000 2h19a1 1 0 100-2H9z"
                fill="#F5F6FA"
            />
            <path
                d="M44 61H20a3.88 3.88 0 01-2.63-1 4 4 0 01-.81-5l12-20.34a4 4 0 016.9 0L47.44 55A4 4 0 0144 61z"
                fill="#2B6BEA"
            />
            <path
                d="M39.89 40.2a1 1 0 00-1.72 1l.54.91a1 1 0 00.86.48 1 1 0 00.86-1.51l-.54-.88z"
                fill="#1B1E28"
            />
            <path
                d="M32 52a1 1 0 01-1-1V40a1 1 0 012 0v11a1 1 0 01-1 1zM32 58a2 2 0 110-4 2 2 0 010 4z"
                fill="#FFBA69"
            />
            <path
                d="M32 52a1 1 0 001-1V40a1 1 0 00-2 0v11a1 1 0 001 1zM32 58a2 2 0 100-4 2 2 0 000 4z"
                fill="#F5F6FA"
            />
            <path
                d="M58 3H6a3 3 0 00-3 3v45a3 3 0 003 3h10l-.27.46A5 5 0 0020 62h24a5 5 0 004.3-7.54L48 54h10a3 3 0 003-3V6a3 3 0 00-3-3zM6 5h52a1 1 0 011 1v7H5V6a1 1 0 011-1zm52 47H46.85l-4.47-7.58a1 1 0 10-1.72 1l5.92 10A3 3 0 0144 60H20a3 3 0 01-2.58-4.52l12-20.34a3 3 0 015.18 0l1.55 2.64a1 1 0 101.72-1l-1.55-2.64a5 5 0 00-8.62 0L17.15 52H6a1 1 0 01-1-1V15h54v36a1 1 0 01-1 1z"
                fill="#1B1E28"
            />
            <path
                d="M42 11a2 2 0 100-4 2 2 0 000 4zM48 11a2 2 0 100-4 2 2 0 000 4zM54 11a2 2 0 100-4 2 2 0 000 4zM9 10h19a1 1 0 100-2H9a1 1 0 000 2z"
                fill="#F5F6FA"
            />
        </svg>
    );
};
