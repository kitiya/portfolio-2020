import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/home/home";
import PortfolioPage from "./pages/portfolio/portfolio-page";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route
            component={() => {
              return (
                <h1 style={{ textAlign: "center", marginTop: "50px" }}>
                  Page not found
                </h1>
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
