import React, { Component } from "react";
import { Link } from "react-router-dom";
import { calc } from "../math/calculation";

export default class TaxForm extends Component {
  state = {
    values: [{ salary: 0 }, { amount: 0 }]
  };

  onChange = e => {
    // console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.salary);
    const sal = this.state.salary;
    const amt = this.state.amount;
    const result = calc(sal, amt);
    this.setState({ amount: result });
    console.log(result);
  };

  render() {
    return (
      <>
        <div className="container mb-10 dimensions border-card">
          <div className="h1">Tax Form</div>
          <div>(All amounts are in Rupees per annum basis)</div>
          <hr />
          <br />
          <form onSubmit={this.onSubmit}>
            <div className="form-group form-row">
              <label className="h5 ml-auto col-md-3 mb-0">
                Salary/Income:{" "}
              </label>
              <input
                type="number"
                min="0"
                className="form-control mr-auto col-md-2"
                id="inputSalary"
                placeholder="Amount"
                name="salary"
                onChange={this.onChange}
              />
            </div>
            <button className="btn btn-outline-primary" type="submit">
              Submit
            </button>
          </form>
          <br />
          <div className="h3">
            Your have to pay {this.state.amount} in taxes{" "}
          </div>
          <br />
          <div>
            <div>Do you want to save taxes?</div>
            <Link to="/savetaxes">
              <button className="btn btn-outline-primary mr-md-2">Yes</button>
            </Link>
            <Link to="/thankyou">
              <button className="btn btn-outline-warning ml-md-2">No</button>
            </Link>
          </div>
          <br />
        </div>
      </>
    );
  }
}
