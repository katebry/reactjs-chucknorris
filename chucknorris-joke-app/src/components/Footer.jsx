import React from "react";
import styled from "styled-components";

const FooterContent = styled.div`
display: flex;
 justify-content: center;
 align: items: center;
 color: white;
 font-size: 18px;
`;

const StyledFooter = styled.div`
  background-color: #002663;
  border-top: 4px solid #0494cd;
  min-height: 200px;
  padding: 75px 20px;
  height: -webkit-fill-available;
  width: -webkit-fill-available;
`;

export function Footer() {
  return (
    <StyledFooter>
      <FooterContent>
        The Chuck-Norris Joke Bank was created by Kate Bryan, February 2020.
      </FooterContent>
    </StyledFooter>
  );
}
