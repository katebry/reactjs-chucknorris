import React from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "../common/styled-features";
import styled from "styled-components";
import logo from "../assets/chuck-logo.png";
import backicon from "../assets/back-icon.png";
import searchicon from "../assets/search-icon.png";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 60px;
  padding: 20px;
  border-bottom: 4px solid #0494cd;
`;

const StyledLogo = styled.img`
  width: 22px;
  height: 20px;
  padding-top: 5px;
`;

const Test = styled.img`
  padding-left: 20px;
`;

const Back = styled.div`
  grid-column: 4;
  padding-top: 15px;
`;

const SearchBtn = styled.div`
  grid-column: 5;
`;

const Img = styled.img`
  grid-column: 1 / 3;
`;

export function Header() {
  return (
    <Container>
      <Img src={logo} alt="The Chuck-Norris Joke Bank Logo" />

      <Back>
        <StyledLogo src={backicon} alt="Back to Homepage" />
        <Link to="/">Go back to the homepage</Link>
      </Back>

      <SearchBtn>
        <Link to="/search">
          <StyledButton>
            Search the joke bank
            <Test src={searchicon} />
          </StyledButton>
        </Link>
      </SearchBtn>
    </Container>
  );
}
