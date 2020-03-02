import axios from "axios";
import React, { useState } from "react";
import {
  StyledButton,
  H1,
  H2,
  Wrapper,
  ButtonContainer
} from "../common/styled-features";

export function GetRandomJoke() {
  const [chuck, setChuck] = useState([""]);

  const url =
    "http://api.icndb.com/jokes/random?exclude=[explicit]&escape=javascript";

  const fetchData = async () => {
    try {
      const {
        data: {
          value: { joke }
        }
      } = await axios.get(url);
      setChuck(joke);
    } catch (err) {
      console.log("error from fetchData func", err);
    }
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
