import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { Searchpage } from "./components/Searchpage";
import { Header } from "./components/Header";
import { Icons } from "./components/Icons";
import { Footer } from "./components/Footer";
import { Theme } from "./common/Theme";

function App() {
  return (
    <Router>
      <Theme>
        <Header />
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
      </Theme>
    </Router>
  );
}

export default App;
