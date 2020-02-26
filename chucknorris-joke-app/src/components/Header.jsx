import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  padding: 15px;
`;

const H3 = styled.h3`
  font-size: 30px;
`;

export function Header() {
  return (
    <Container>
      <H3>The Chuck-Norris Joke Bank</H3>
    </Container>
  );
}
