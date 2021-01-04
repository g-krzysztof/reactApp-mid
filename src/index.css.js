import { createGlobalStyle } from "styled-components";
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
${normalize}
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap');
*{
font-family: 'Titillium Web', sans-serif;};
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  li + li {
    margin-left: ${({ theme }) => theme.spacing.xs }px;
  }
}
`;

export default GlobalStyles;