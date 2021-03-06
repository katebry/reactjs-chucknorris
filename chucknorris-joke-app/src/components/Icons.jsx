import React from "react";
import styled from "styled-components";
import chuck2 from "../common/assets/chuck2.png";
import {
  FooterImg,
  FooterIconsContainer,
  FooterIconWrapper
} from "../common/styled-features";

// TODO: refactor
const Image1 = styled(FooterIconWrapper)`
  grid-column: 2;
`;

const Image2 = styled(FooterIconWrapper)`
  grid-column: 3;
`;

const Image3 = styled(FooterIconWrapper)`
  grid-column: 4;
`;

const Image4 = styled(FooterIconWrapper)`
  grid-column: 5;
`;

const Image5 = styled(FooterIconWrapper)`
  grid-column: 6;
`;

const Image6 = styled(FooterIconWrapper)`
  grid-column: 7;
`;

const Image7 = styled(FooterIconWrapper)`
  grid-column: 8;
`;

export function Icons() {
  return (
    <FooterIconsContainer>
      <Image1>
        <FooterImg src={chuck2} alt="the face of chuck" />
      </Image1>
      <Image2>
        <FooterImg src={chuck2} alt="the face of chuck" />
      </Image2>
      <Image3>
        <FooterImg src={chuck2} alt="the face of chuck" />
      </Image3>
      <Image4>
        <FooterImg src={chuck2} alt="the face of chuck" />
      </Image4>
      <Image5>
        <FooterImg src={chuck2} alt="the face of chuck" />
      </Image5>
      <Image6>
        <FooterImg src={chuck2} alt="the face of chuck" />
      </Image6>
      <Image7>
        <FooterImg src={chuck2} alt="the face of chuck" />
      </Image7>
    </FooterIconsContainer>
  );
}
