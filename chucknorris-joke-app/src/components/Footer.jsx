import React from "react";
import styled from "styled-components";
import chuck2 from "../assets/chuck2.png";
import chuck3 from "../assets/chuck3.png";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  padding: 20px;
  padding-top: 20px;
`;

const R = styled.div`
  display: flex;
  height: 170px;
  width: 170px;
  border-radius: 99px;
  border-radius: 50%;
  border: 5px solid #bce3f2;
  align-items: center;
  justify-content: center;
  transition: opacity 0.25s;
  z-index: 1;

  :hover {
    background-color: #bce3f2;
  }
`;

const Img = styled.img`
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  padding: 30px;
  height: 120px;
  width: 130px;
`;

const ImageTagContainer = styled.div`
  display: flex;
`;

const P = styled.p`
  color: #002663;
  font-size: 28px;
  font-weight: 900;
`;

export function Footer() {
  return (
    <Container>
      {/* <ImageTagContainer> */}
      <R>
        <Img src={chuck3} alt="the face of chuck" />
      </R>
      {/* <P>Tell</P> */}
      {/* </ImageTagContainer> */}
      <R>
        <Img src={chuck2} alt="the face of chuck" />
      </R>
      {/* Me */}
      <R>
        <Img src={chuck3} alt="the face of chuck" />
      </R>
      {/* A */}
      <R>
        <Img src={chuck2} alt="the face of chuck" />
      </R>
      {/* Funny */}
      <R>
        <Img src={chuck3} alt="the face of chuck" />
      </R>
      {/* Joke */}
    </Container>
  );
}
