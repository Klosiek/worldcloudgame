import { createGlobalStyle } from "styled-components";

const GlobalStylesProvider = createGlobalStyle`
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
`;

export default GlobalStylesProvider;
