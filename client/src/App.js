import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./styles/App.css";
import Dashboard from "./components/Dashboard";
import Daily from "./components/Daily";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/soupeditordashboard" component={Dashboard} />
            <Route exact path="/" component={Daily} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
