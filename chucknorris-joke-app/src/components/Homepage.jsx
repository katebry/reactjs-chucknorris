import React from "react";
import { StyledBody } from "../common/styled-features";
import { GetRandomJoke } from "../api/GetRandomJoke";
import chuckimage from "../assets/chuck-image.png";
import styled from "styled-components";
import { Footer } from "./Footer";

const ChuckImg = styled.img`
  grid-column: 2;
  max-width: 550px;
  max-height: 370px;
`;

const Container = styled.div`
  width: 50%;
  padding-left: 30px;
  height: 100%;
`;

export function Homepage() {
  return (
    <>
      <StyledBody>
        <GetRandomJoke />
        <Container>
          <ChuckImg
            src={chuckimage}
            alt="collage of Chuck Norris images through the ages"
          />
        </Container>
      </StyledBody>
      <Footer />
    </>
  );
}
