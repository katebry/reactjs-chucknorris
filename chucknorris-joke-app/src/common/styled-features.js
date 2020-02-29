import styled from "styled-components";

export const StyledBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  padding-left: 40px;
  padding-right: 40px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: (2, 1fr);
  padding-left: 20px;
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

// Header
export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr, 1fr, 2fr, 2fr);
  grid-template-rows: 1fr;
  grid-column-gap: 60px;
  padding: 20px;
  padding-left: 30px;
  border-bottom: 4px solid #0494cd;
`;

export const Logo = styled.img`
  grid-column: 1 / 3;
`;

export const BackIconContainer = styled.div`
  grid-column: 4;
  padding-top: 15px;
`;

export const StyledBackIcon = styled.img`
  width: 22px;
  height: 20px;
  padding-top: 8px;
`;

export const SearchButton = styled.div`
  grid-column: 5;
`;

export const SearchIcon = styled.img`
  padding-left: 20px;
`;

// Footer
export const FooterImg = styled.img`
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  padding: 15px;
  height: 70px;
  width: 100px;
`;

export const FooterIconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  padding: 20px;
  padding-top: 50px;
`;

export const FooterIconWrapper = styled.div`
  display: flex;
  height: 100px;
  width: 100px;
  border-radius: 99px;
  border-radius: 50%;
  border: 2px solid #bce3f2;
  align-items: center;
  justify-content: center;
  transition: opacity 0.25s;
  z-index: 1;

  :hover {
    background-color: #bce3f2;
  }
`;

// Homepage
export const ImageContainer = styled.div`
  display: inline-block;
  padding-left: 15px;
  vertical-align: top;
  width: 100%;
  float: left;
`;

export const MainChuckImg = styled.img`
  display: inline-block;
  padding-left: 15px;
  padding-right: 30px;
  vertical-align: top;
  float: right;
`;

// API calls
export const H1 = styled.h1`
  color: #002663;
  font-weight: 900;
  font-size: 48px;
`;

export const StyledInput = styled.input`
  border: 2px solid #002663;
  border-radius: 6px;
  padding: 15px;
  height: 10px;
  font-size: 16px;

:focus {
  cursor: text;
  outline: none;
  `;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
