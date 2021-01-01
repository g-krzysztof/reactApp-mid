import React from 'react';
import styled from 'styled-components';

import { Wrapper } from "components";

const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.gray.light};
    display: flex;
    padding: ${( { theme }) => theme.spacing.sm}px 0;
    justify-content: space-between;
`;

function Navigation() {
    return(
        <Container>
            <Wrapper>
                Text test
            </Wrapper>
        </Container>
    )
}

export default Navigation;