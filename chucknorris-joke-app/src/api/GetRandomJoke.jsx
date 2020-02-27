import axios from "axios";
import React, { useState } from "react";
import { StyledButton } from "../common/styled-features";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: (2, 1fr);
  padding-left: 20px;
`;

const H2 = styled.h2``;

export function GetRandomJoke() {
  const [chuck, setChuck] = useState([""]);

  const url =
    "http://api.icndb.com/jokes/random?exclude=[explicit]&escape=javascript";

  const fetchData = async () => {
    const {
      data: {
        value: { joke }
      }
    } = await axios.get(url);
    setChuck(joke);
  };

  const handleClick = () => {
    fetchData();
  };

  return (
    <Container>
      <H2>{chuck}</H2>
      <StyledButton onClick={handleClick}>Random Joke</StyledButton>
    </Container>
  );
}
