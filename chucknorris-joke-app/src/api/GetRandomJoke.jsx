import axios from "axios";
import React, { useState } from "react";
import { StyledButton } from "../common/styled-features";

export function GetRandomJoke() {
  const [chuck, setChuck] = useState([""]);

  const url = "http://api.icndb.com/jokes/random?exclude=[explicit]";

  const fetchData = async () => {
    const {
      data: {
        value: { joke }
      }
    } = await axios.get(url);
    setChuck(joke);
  };

  const handleClick = () => {
    fetchData();
  };

  return (
    <>
      <h2>{chuck}</h2>
      <h3>"chuck"</h3>
      <StyledButton onClick={handleClick}>Random Joke</StyledButton>
    </>
  );
}
