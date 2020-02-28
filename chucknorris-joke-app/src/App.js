import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { SearchJoke } from "./api/SearchJoke";
import { StyledHeader } from "./common/styled-features";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <StyledHeader>
        <Header />
      </StyledHeader>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/search">
          <SearchJoke />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
