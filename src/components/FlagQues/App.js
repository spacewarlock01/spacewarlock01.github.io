import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import SignInForm from "./pages/SignInForm";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="appAside" />
          <div className="appForm">
            <div className="formTitle">
              <label to="/sign-in" className="formTitleLink">
                Sign In
              </label>
            </div>

            <Route path="/sign-in" component={SignInForm} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
