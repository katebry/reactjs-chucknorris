import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderSearchButton,
  StyledBackIcon,
  SearchButton,
  BackIconContainer,
  SearchIcon,
  HeaderContainer,
  Logo
} from "../common/styled-features";
import logo from "../common/assets/chuck-logo.png";
import backicon from "../common/assets/back-icon.png";
import searchicon from "../common/assets/search-icon.png";

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src={logo} alt="The Chuck-Norris Joke Bank Logo" />
      </Link>
      <BackIconContainer>
        <StyledBackIcon src={backicon} alt="Back to Homepage" />
        <Link to="/">Go back to the homepage</Link>
      </BackIconContainer>
      <SearchButton>
        <Link to="/search">
          <HeaderSearchButton>
            Search the joke bank
            <SearchIcon src={searchicon} />
          </HeaderSearchButton>
        </Link>
      </SearchButton>
    </HeaderContainer>
  );
}
