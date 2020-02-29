import axios from "axios";
import React, { useState } from "react";
import { StyledButton, H1, Wrapper } from "../common/styled-features";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
    <Wrapper>
      <H1>Knock knock, it's Chuck</H1>
      <H2>{chuck}</H2>
      <ButtonContainer>
        <StyledButton onClick={handleClick}>Random Joke</StyledButton>
      </ButtonContainer>
    </Wrapper>
  );
}
