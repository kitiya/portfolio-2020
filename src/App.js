import React from "react";
import { HasRouter, Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/home/home";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
