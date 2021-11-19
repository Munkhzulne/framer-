import styled from 'styled-components';
import { SyncIcon } from '../../assets';

export const SpinningSyncIcon = styled(SyncIcon)`
    animation-name: spinner;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
    @keyframes spinner {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
