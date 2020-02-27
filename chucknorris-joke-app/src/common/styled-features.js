import styled from "styled-components";

export const StyledBody = styled.div`
  display: flex;
`;

export const StyledHeader = styled.header`
  width: 100%;
`;

export const StyledButton = styled.button`
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
