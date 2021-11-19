import styled from 'styled-components';

export const HoverableOverlay = styled.div<any>`
    position: ${({ relative }: any) => (relative ? 'relative' : 'absolute')};
    z-index: ${({ zIndex }: any) => zIndex};
    top: ${({ top }) => top};
    right: ${({ right }) => right};
    left: ${({ left }) => left};
    bottom: ${({ bottom }) => bottom};
    display: flex;
    opacity: 0;
    height: 100%;
    width: 100%;
    transition: 0.2s;
    :hover {
        opacity: 1;
    }
`;
