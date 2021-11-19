import styled from 'styled-components';

export const LoadingDots = styled.div`
    position: relative;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #2b6bea;
    color: #2b6bea;
    animation: dotFlashing 0.5s infinite linear alternate;
    animation-delay: 0.25s;

    :before {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
        left: -6px;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: #2b6bea;
        color: #2b6bea;
        animation: dotFlashing 0.5s infinite alternate;
        animation-delay: 0s;
    }

    :after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
        left: 6px;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: #2b6bea;
        color: #2b6bea;
        animation: dotFlashing 0.5s infinite alternate;
        animation-delay: 0.5s;
    }

    @keyframes dotFlashing {
        0% {
            background-color: #2b6bea;
        }
        50%,
        100% {
            background-color: #eff3ff;
        }
    }
`;
