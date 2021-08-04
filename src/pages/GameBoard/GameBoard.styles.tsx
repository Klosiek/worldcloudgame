import styled from "styled-components";

export const Container = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 700px;
  width: 1000px;
  border-radius: 8px;
  border-color: black;
  border-width: 2px;
  border-style: solid;
`;

export const Cloud = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 8px;
  font-size: 20px;
  width: 140px;
  height: 60px;
`;

export const Result = styled.div<{ isGood: boolean }>`
  color: ${({ isGood }) => (isGood ? "green" : "red")};
`;

export const Word = styled.div<{ isChecked: boolean }>`
  /* background-color: ${({ isChecked }) => (isChecked ? "yellow" : null)}; */
  font-weight: ${({ isChecked }) => (isChecked ? 500 : 200)};
`;
