import React from "react";
import { Link } from "react-router-dom";
import { StyledBody, StyledButton } from "../common/styled-features";
import { GetRandomJoke } from "../api/GetRandomJoke";

export function Homepage() {
  return (
    <StyledBody>
      <p>Homepage</p>
      <GetRandomJoke />
      <Link to="/search">
        <StyledButton>Search Joke</StyledButton>
      </Link>
    </StyledBody>
  );
}
