import axios from "axios";
import React, { useState } from "react";
import {
  ButtonContainer,
  StyledButton,
  H1,
  H2,
  StyledInput,
  Wrapper
} from "../common/styled-features";
import styled from "styled-components";

const SmallH1 = styled(H1)`
  font-size: 40px;
`;

// TODO: code refactor
export function SearchJoke() {
  const [firstName, setFirstName] = useState("Chuck");
  const [lastName, setLastName] = useState("Norris");
  const [values, setValues] = useState("");
  const [customJoke, setCustomJoke] = useState([""]);
  const url = `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&exclude=[explicit]&escape=javascript`;

  const whitespaceRegex = /\s/g;
  const wordRegex = /[a-zA-z*]/g;

  const fetchData = async () => {
    const {
      data: {
        value: { joke }
      }
    } = await axios.get(url);

    setCustomJoke(joke);
  };

  const checkNames = values => {
    if (whitespaceRegex.test(values)) {
      const splitName = values.split(" ", 2);
      setFirstName(splitName[0]);
      setLastName(splitName[1]);
      return;
    } else {
      // TODO: this still returns numbers, need another alternative
      return wordRegex.test(values) ? setFirstName(values) : "";
    }
  };

  function handleClick() {
    checkNames(values);
    fetchData();
  }

  const onChange = event => {
    event.preventDefault();
    setValues(event.target.value);
  };

  return (
    <Wrapper>
      {firstName !== "Chuck" ? (
        <SmallH1>
          Or is it {firstName} {lastName} at the door?
        </SmallH1>
      ) : (
        <H1> Who's there? It's {firstName}</H1>
      )}
      <StyledInput
        type="text"
        placeholder="Enter your name..."
        value={values}
        onChange={onChange}
      />
      <H2>{customJoke}</H2>
      <ButtonContainer>
        <StyledButton onClick={handleClick}>Search</StyledButton>
      </ButtonContainer>
    </Wrapper>
  );
}
