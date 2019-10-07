import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-lg bg-light mb-3 fixed-top navbar-changes">
          <div className="navbar-brand mb-0 h1 mr-auto">
            Comprehensive Income Tax Calculator
          </div>
          <div className="mb-0 h6 ml-auto">
            <a
              href="https://www.linkedin.com/in/mdjunaid14/"
              className="link-changes"
            >
              <i className="fab fa-linkedin"></i>
              {/* My LinkedIn Profile */}
            </a>{" "}
            <a href="https://github.com/mdjunaid14/" className="link-changes">
              <i className="fab fa-github"></i>
              {/* My Github Profile */}
            </a>
          </div>
        </nav>
      </>
    );
  }
}
