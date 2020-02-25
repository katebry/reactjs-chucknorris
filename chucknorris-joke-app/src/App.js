import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { SearchJoke } from "./api/SearchJoke";
import { StyledHeader } from "./common/styled-features";

function App() {
  return (
    <Router>
      <StyledHeader />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/search">
          <SearchJoke />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
