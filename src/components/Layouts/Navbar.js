import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-lg bg-dark mb-3 fixed-top navbar-changes">
          <div className="navbar-brand mb-0 h1 mx-auto">
            Comprehensive Income Tax Calculator
          </div>
        </nav>
      </>
    );
  }
}
