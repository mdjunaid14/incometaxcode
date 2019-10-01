import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import Navbar from "./components/Navbar";
import TaxForm from "./components/TaxForm";
import Disclaimer from "./components/Disclaimer";
import SaveForm from "./components/SaveForm";
import Thank from "./components/Thank";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Navbar />
            <div className="App">
              <div className="container">
                <Switch>
                  <Route exact path="/" component={TaxForm}></Route>
                  <Route exact path="/savetaxes/" component={SaveForm}></Route>
                  <Route exact path="/thankyou/" component={Thank}></Route>
                </Switch>
              </div>
            </div>
            <Disclaimer className="disclaimer" />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}
