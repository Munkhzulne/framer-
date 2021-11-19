import React from 'react';
import { mapRoleToBackgroundColor } from '../../components/layout/background';
export const FramerIcon = (props) => {
    const { role, height, width } = props;
    return (
        <svg
            width={width || 63}
            height={height || 63}
            viewBox="0 0 63 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M60.5306 31.375C60.5306 47.6667 47.3168 60.875 31.0153 60.875C14.7138 60.875 1.5 47.6667 1.5 31.375C1.5 15.0833 14.7138 1.875 31.0153 1.875C47.3168 1.875 60.5306 15.0833 60.5306 31.375Z"
                stroke="#EF2A82"
                stroke-width="3"
            />
            <path
                d="M47.932 17.156C48.604 17.252 49.06 17.456 49.3 17.768C49.564 18.08 49.696 18.488 49.696 18.992C49.696 20.648 48.808 21.416 47.032 21.296L45.772 21.188C44.356 21.068 42.94 20.972 41.524 20.9C40.132 20.828 38.668 20.792 37.132 20.792H35.512C35.224 24.344 34.924 27.584 34.612 30.512L40.804 30.404C41.692 30.404 42.28 30.56 42.568 30.872C42.88 31.184 43.036 31.604 43.036 32.132C43.036 32.948 42.796 33.596 42.316 34.076C41.836 34.532 41.152 34.76 40.264 34.76H34.108L33.892 36.308C33.388 40.268 32.308 43.088 30.652 44.768C29.02 46.448 26.764 47.288 23.884 47.288C22.252 47.288 20.752 46.94 19.384 46.244C18.016 45.524 17.008 44.66 16.36 43.652C16.096 43.244 15.964 42.752 15.964 42.176C15.964 41.6 16.096 41.096 16.36 40.664C16.648 40.232 16.996 40.016 17.404 40.016C17.692 40.016 17.968 40.112 18.232 40.304C18.52 40.496 18.88 40.868 19.312 41.42C20.464 42.932 21.892 43.688 23.596 43.688C24.964 43.688 26.104 43.136 27.016 42.032C27.952 40.904 28.552 39.14 28.816 36.74L29.032 34.76H27.304C26.752 34.76 26.272 34.604 25.864 34.292C25.48 33.98 25.288 33.536 25.288 32.96C25.288 32.216 25.48 31.652 25.864 31.268C26.248 30.86 26.812 30.656 27.556 30.656C28.228 30.656 28.888 30.644 29.536 30.62C29.824 27.98 30.136 24.776 30.472 21.008C27.88 21.248 26.056 21.668 25 22.268C23.944 22.868 23.416 23.756 23.416 24.932C23.416 25.748 23.656 26.528 24.136 27.272C24.28 27.488 24.352 27.704 24.352 27.92C24.352 28.352 24.112 28.736 23.632 29.072C23.152 29.384 22.612 29.54 22.012 29.54C21.364 29.54 20.812 29.348 20.356 28.964C20.068 28.724 19.792 28.232 19.528 27.488C19.264 26.744 19.132 25.916 19.132 25.004C19.132 22.028 20.656 19.868 23.704 18.524C26.776 17.18 31.252 16.508 37.132 16.508C41.212 16.508 44.812 16.724 47.932 17.156Z"
                fill="#EF2A82"
            />
        </svg>
    );
};
