import styled from "styled-components";

export const StyledBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  padding-left: 40px;
  padding-right: 40px;
  @media screen and (max-width: 730px) {
    grid-template-columns: 1fr;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: (2, 1fr);
  padding-left: ${props => props.theme.padding.standard};
  @media screen and (max-width: 730px) {
    display: ;
  }
`;

export const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.darkBlue};
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
    background-color: ${props => props.theme.colors.lighterBlue};
    transform: translateY(4px);
    box-shadow: 0 3px ${props => props.theme.colors.grey};
  }
`;

export const HeaderSearchButton = styled(StyledButton)`
  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const MobileStyledButton = styled.button`
  @media screen and (max-width: 650px) {
    width: 80px;
    background-color: ${props => props.theme.colors.darkBlue};
    height: 50px;
    border: none;
    border-radius: 999px;
    cursor: pointer;
    font-size: 14px;
    color: white;
    font-weight: 500;
  }
`;

// Header
export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr, 1fr, 2fr, 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 60px;
  padding: ${props => props.theme.padding.standard};
  padding-left: 30px;
  border-bottom: 4px solid #0494cd;
  @media screen and (max-width: 1040px) {
    grid-column-gap: 5px;
  }
`;

export const Logo = styled.img`
  grid-column: 1 / 3;
  cursor: pointer;
  @media screen and (max-width: 850px) {
    padding-top: 10px;
    max-width: 300px;
  }
`;

export const BackIconContainer = styled.div`
  grid-column: 4;
  padding-top: 15px;
  @media screen and (max-width: 1174px) {
    display: none;
  }
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
  padding-left: ${props => props.theme.padding.standard};
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
  padding: ${props => props.theme.padding.standard};
  padding-top: 50px;
`;

export const FooterIconWrapper = styled.div`
  display: flex;
  height: 100px;
  width: 100px;
  border-radius: 99px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.colors.lightestBlue};
  align-items: center;
  justify-content: center;
  transition: opacity 0.25s;
  z-index: 1;

  :hover {
    background-color: ${props => props.theme.colors.lightestBlue};
  }

  @media screen and (max-width: 850px) {
    display: none;
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
  @media screen and (max-width: 1250px) {
    width: 500px;
  }
  @media screen and (max-width: 1100px) {
    width: 350px;
  }
  @media screen and (max-width: 730px) {
    display: none;
  }
`;

// API calls
export const H1 = styled.h1`
  color: ${props => props.theme.colors.darkBlue};
  font-weight: 900;
  font-size: 48px;
  @media screen and (max-width: 1100px) {
    font-size: 28px;
  }
`;

export const H2 = styled.h2`
  @media screen and (max-width: 1100px) {
    font-size: 22px;
  }
`;

export const StyledInput = styled.input`
  border: 2px solid ${props => props.theme.colors.darkBlue};
  border-radius: 6px;
  padding: 15px;
  height: 10px;
  font-size: 16px;
  @media screen and (max-width: 850px) {
    max-width: 300px;
  }

  :focus {
  cursor: text;
  outline: none;

  `;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 850px) {
    max-width: 200px;
  }
`;
