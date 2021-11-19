import styled from 'styled-components';

export const Container = styled.div<ContainerType>`
    margin: 0 auto;
    max-width: ${({ theme }) => theme.desktop}px;
    position: relative;
`;
