import React from "react";
import {
  StyledBody,
  ImageContainer,
  MainChuckImg
} from "../common/styled-features";
import { SearchJoke } from "./SearchJoke";
import chuckimage from "../common/assets/chucknorrisgame.jpg";

export function Searchpage() {
  return (
    <StyledBody>
      <SearchJoke />
      <ImageContainer>
        <MainChuckImg
          src={chuckimage}
          alt="A still from a Chuck Norris game, featuring the figure of Chuck within the game"
        />
      </ImageContainer>
    </StyledBody>
  );
}
