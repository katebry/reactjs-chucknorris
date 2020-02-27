import React from "react";
import styled from "styled-components";
import chuck2 from "../assets/chuck2.png";
import chuck3 from "../assets/chuck3.png";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  padding: 20px;
  padding-top: 20px;
`;

const R = styled.div`
  display: flex;
  height: 100px;
  width: 100px;
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

const I1 = styled(R)`
  grid-column: 2;
`;

const I2 = styled(R)`
  grid-column: 3;
`;

const I3 = styled(R)`
  grid-column: 4;
`;

const I4 = styled(R)`
  grid-column: 5;
`;

const I5 = styled(R)`
  grid-column: 6;
`;

const I6 = styled(R)`
  grid-column: 7;
`;

const I7 = styled(R)`
  grid-column: 8;
`;

const Img = styled.img`
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  padding: 15px;
  height: 70px;
  width: 100px;
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
      <I1>
        <Img src={chuck3} alt="the face of chuck" />
      </I1>
      {/* <P>Tell</P> */}
      {/* </ImageTagContainer> */}
      <I2>
        <Img src={chuck2} alt="the face of chuck" />
      </I2>
      {/* Me */}
      <I3>
        <Img src={chuck3} alt="the face of chuck" />
      </I3>
      {/* A */}
      <I4>
        <Img src={chuck2} alt="the face of chuck" />
      </I4>
      {/* Funny */}
      <I5>
        <Img src={chuck3} alt="the face of chuck" />
      </I5>
      <I6>
        <Img src={chuck2} alt="the face of chuck" />
      </I6>
      {/* Funny */}
      <I7>
        <Img src={chuck3} alt="the face of chuck" />
      </I7>
      {/* Joke */}
    </Container>
  );
}
