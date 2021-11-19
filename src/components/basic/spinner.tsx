import styled, { keyframes } from 'styled-components';
import { dimensionToStyle } from '../layout';
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
    border-top: 2px solid grey;
    border-right: 2px solid grey;
    border-bottom: 2px solid grey;
    border-left: 3px solid black;
    background: transparent;
    width: ${({ width = '16px', theme }: DimensionType) =>
        dimensionToStyle(width, theme.baseSpace)};
    height: ${({ width = '16px', theme }: DimensionType) =>
        dimensionToStyle(width, theme.baseSpace)};
    border-radius: 50%;
`;
