import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HeaderSearchButton,
  StyledBackIcon,
  SearchButton,
  BackIconContainer,
  SearchIcon,
  HeaderContainer,
  Logo,
  MobileStyledButton
} from "../common/styled-features";
import logo from "../common/assets/chuck-logo.png";
import backicon from "../common/assets/back-icon.png";
import searchicon from "../common/assets/search-icon.png";

export function Header() {
  const [windowSize, setWindowSize] = useState(window.innerWidth > 650);

  useEffect(() => {
    window.addEventListener("resize", setWindowSize);
    return () => window.removeEventListener("resize", setWindowSize);
  }, []);

  return (
    <HeaderContainer>
      {/* {console.log(windowSize.target.innerScreen)} */}
      <Link to="/">
        <Logo src={logo} alt="The Chuck-Norris Joke Bank Logo" />
      </Link>
      <BackIconContainer>
        <StyledBackIcon src={backicon} alt="Back to Homepage" />
        <Link to="/">Go back to the homepage</Link>
      </BackIconContainer>
      <SearchButton>
        <Link to="/search">
          {windowSize ? (
            <HeaderSearchButton>
              Search the joke bank
              <SearchIcon src={searchicon} />
            </HeaderSearchButton>
          ) : (
            <MobileStyledButton>Search</MobileStyledButton>
          )}
        </Link>
      </SearchButton>
    </HeaderContainer>
  );
}
