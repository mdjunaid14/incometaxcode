import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import Navbar from "./components/Layouts/Navbar";
import TaxForm from "./components/Forms/TaxForm";
import Disclaimer from "./components/Layouts/Disclaimer";
import SaveForm from "./components/Forms/SaveForm";
import Thank from "./components/Layouts/Thank";
import Result from "./components/Layouts/Result";

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <React.Fragment>
              <Navbar />
              {/* <div className="App"> */}
              <div className="container">
                <Switch>
                  <Route exact path="/" component={TaxForm}></Route>
                  <Route exact path="/savetaxes/" component={SaveForm}></Route>
                  <Route exact path="/thankyou/" component={Thank}></Route>
                  <Route exact path="/result/" component={Result}></Route>
                </Switch>
              </div>
              {/* </div> */}
              <Disclaimer className="disclaimer" />
            </React.Fragment>
          </Router>
        </Provider>
      </div>
    );
  }
}
