import styled from "styled-components";

interface HeaderProps {
  size: string;
}

export const Container = styled.div`
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.a<HeaderProps>`
  font-size: ${({ size }) => size};
  font-weight: bold;
`;

export const Input = styled.input`
  width: 280px;
  padding: 12px 8px;
  border-radius: 4px;
  border-width: 1.5px;
  border-style: solid;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 8px 32px;
  color: #37a7ed;
  background-color: #ffffff;
  border-color: #37a7ed;
  border-radius: 4px;
  border-width: 1.5px;
  border-style: solid;

  :hover {
    background-color: #eeeaea;
  }
`;
