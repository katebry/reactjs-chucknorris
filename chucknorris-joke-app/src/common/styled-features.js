import styled from "styled-components";

export const StyledBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  padding: 20px;
`;

export const StyledHeader = styled.header`
  width: 100%;
`;

export const StyledButton = styled.button`
  grid-column: 1;
  border-radius: 5px;
  background: pink;
`;

export const StyledSearchButton = styled.button`
  background-color: #002663;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
  padding-top: 18px;
  padding-bottom: 18px;
  padding-right: 18px;
  font-size: 18px;
  color: white;
  font-weight: 500;
  width: 270px;
  height: 60px;
  margin: 0;
  cursor: pointer;
  padding: 15px 30px;
  border: none;
  border-radius: 999px;
  outline: none;

  :active {
    background-color: #046ab8;
    transform: translateY(4px);
    box-shadow: 0 3px #666;
  }
`;
