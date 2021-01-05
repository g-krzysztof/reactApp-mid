import styled from "styled-components";

import Wrapper from "../Wrapper";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.gray.light};
    display: flex;
    padding: ${( { theme }) => theme.spacing.sm}px 0;
    justify-content: space-between;
`;

export const NavigationWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
`;

export const List = styled.ul`
  display: flex;
  font-weight: bold;
  font-size: 14px;
  a{
    text-decoration: none;
    padding-right: 20px;
    color: ${({ theme }) => theme.colors.pink.normal };
    :hover{
      color: ${({ theme }) => theme.colors.red.normal }
    }
  }
`;