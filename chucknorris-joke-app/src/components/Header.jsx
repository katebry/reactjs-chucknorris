import React from "react";
import { Link } from "react-router-dom";
import {
  StyledButton,
  StyledBackIcon,
  SearchButton,
  BackIconContainer,
  SearchIcon,
  HeaderContainer,
  Logo
} from "../common/styled-features";
import logo from "../assets/chuck-logo.png";
import backicon from "../assets/back-icon.png";
import searchicon from "../assets/search-icon.png";

export function Header() {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="The Chuck-Norris Joke Bank Logo" />
      <BackIconContainer>
        <StyledBackIcon src={backicon} alt="Back to Homepage" />
        <Link to="/">Go back to the homepage</Link>
      </BackIconContainer>
      <SearchButton>
        <Link to="/search">
          <StyledButton>
            Search the joke bank
            <SearchIcon src={searchicon} />
          </StyledButton>
        </Link>
      </SearchButton>
    </HeaderContainer>
  );
}
