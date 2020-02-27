import React from "react";
import { StyledBody } from "../common/styled-features";
import { GetRandomJoke } from "../api/GetRandomJoke";
import chuckimage from "../assets/chuck-image.png";
import styled from "styled-components";
import { Footer } from "./Footer";

const ChuckImg = styled.img`
  display: inline-block;
  padding-left: 15px;
  padding-right: 30px;
  vertical-align: top;
  float: right;
`;

// justify-content: flex-end;
// align-items: flex-end;
// max-height: 450px;
const Container = styled.div`
  display: inline-block;
  padding-left: 15px;
  vertical-align: top;
  width: 100%;
  float: left;
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
