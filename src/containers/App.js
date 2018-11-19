import React, { Component } from "react";
import Header from "../common/Header";
import { Route } from "react-router-dom";
import HomePage from "../components/HomePage";

class App extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <Header />
        <Route exact path="/" component={HomePage} />
      </div>
    );
  }
}

export default App;
