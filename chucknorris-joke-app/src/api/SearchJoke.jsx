import axios from "axios";
import React, { useState } from "react";

export function SearchJoke() {
  const [name, setName] = useState("");
  const [custom, setCustom] = useState([""]);

  const url = `
  http://api.icndb.com/jokes/random?firstName=${name}`;

  const fetchData = async () => {
    const {
      data: {
        value: { joke }
      }
    } = await axios.get(url);
    setCustom(joke);
  };

  function handleClick() {
    fetchData();
  }

  const onChange = event => {
    setName(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter a name..."
        value={name}
        onChange={onChange}
      ></input>
      <button onClick={handleClick}>Search</button>
      <h2>{custom}</h2>
    </>
  );
}
