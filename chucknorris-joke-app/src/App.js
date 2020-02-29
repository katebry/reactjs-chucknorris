import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { Searchpage } from "./components/Searchpage";
import { StyledHeader } from "./common/styled-features";
import { Header } from "./components/Header";
import { Icons } from "./components/Icons";
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
          <Searchpage />
        </Route>
      </Switch>
      <Icons />
      <Footer />
    </Router>
  );
}

export default App;
