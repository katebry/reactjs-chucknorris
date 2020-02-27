import axios from "axios";
import React, { useState } from "react";

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
      // TODO: this doesm't work properly - still returns numbers, need another alternative
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
    <>
      <label>Who's the real hero of this tale?</label>
      <input
        type="text"
        placeholder="Enter a name..."
        value={values}
        onChange={onChange}
      ></input>
      <button onClick={handleClick}>Search</button>
      <h2>{customJoke}</h2>
    </>
  );
}
