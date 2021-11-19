import styled from 'styled-components';
import {  FramerIcon } from '../icons'

export const AnimatedLogo = styled(FramerIcon)`
    animation: blinker 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) infinite
        alternate;

    @keyframes blinker {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
