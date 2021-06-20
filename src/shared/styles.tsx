import styled from "styled-components";

export const Header = styled.a<{ size: number }>`
  font-size: ${({ size }) => `${size}px`};
  font-weight: bold;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 8px 32px;
  color: #ffffff;
  border-color: #37a7ed;
  background-color: #37a7ed;
  border-radius: 4px;
  border-width: 1.5px;
  border-style: solid;

  :hover {
    border-color: #1997e6;
    background-color: #1997e6;
  }

  :disabled {
    border-color: #58bcfa;
    background-color: #ffffff;
    color: #37a7ed;
    cursor: default;
  }
`;
