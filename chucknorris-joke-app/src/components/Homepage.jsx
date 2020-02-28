import React from "react";
import {
  StyledBody,
  ImageContainer,
  MainChuckImg
} from "../common/styled-features";
import { GetRandomJoke } from "../api/GetRandomJoke";
import chuckimage from "../assets/chuck-image.png";

export function Homepage() {
  return (
    <StyledBody>
      <GetRandomJoke />
      <ImageContainer>
        <MainChuckImg
          src={chuckimage}
          alt="collage of Chuck Norris images through the ages"
        />
      </ImageContainer>
    </StyledBody>
  );
}
