import styled from 'styled-components';
type AnimatedType = {
    visible?: boolean;
    height? : string
};
export const AnimatedToggleView = styled.div<AnimatedType>`
    position: relative;
    z-index: ${({ visible }) => (visible ? 1 : -99)};
    height: ${({ visible, height }) => (visible ? height || 'auto' : 0)};
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    & > * {
        visibility: ${(visible: any) => (visible ? 'visible' : 'hidden')};
        z-index: ${({ visible }) => (visible ? 1 : -99)};
    }
    transition: all 0.2s, z-index 0s;
    width: 100%;
`;
