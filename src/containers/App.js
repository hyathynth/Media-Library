import React, { Component } from "react";
import Header from "../common/Header";
import { Route, Switch } from "react-router-dom";
import HomePage from "../components/HomePage";
import MediaGalleryPage from "./MediaGallaryPage";

class App extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/library" component={MediaGalleryPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
