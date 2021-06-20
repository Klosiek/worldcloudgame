import styled from "styled-components";

interface HeaderProps {
  size: number;
}

export const Header = styled.a<HeaderProps>`
  font-size: ${({ size }) => `${size}px`};
  font-weight: bold;
`;
