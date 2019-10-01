import React, { Component } from "react";
import Form from "./Form";
import { updateState } from "../actions/stateActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class SaveForm extends Component {
  state = {
    // values: [
    age: 0,
    basic_salary: 0,
    epf: 0,
    health_ins: 0,
    home_interest: 0,
    home_premium: 0,
    hra: 0,
    life_ins: 0,
    ppf: 0,
    tuition_fee: 0
    // ]
  };

  onChange = e => {
    // console.log(typeof parseInt(e.target.value));
    this.setState({ [e.target.name]: parseInt(e.target.value) });
  };

  onSubmit = e => {
    e.preventDefault();
    const values = this.state;
    console.log(values);
    this.props.updateState(values);
  };

  render() {
    var items = [
      {
        heading: "Basic Info",
        subheading1: "Salary",
        s1value: "basic_salary",
        subheading2: "Age",
        s2value: "age"
      },
      {
        heading: "Insurance",
        subheading1: "Health Insurance Premium",
        s1value: "health_ins",
        subheading2: "Life Insurance Premium",
        s2value: "life_ins"
      },
      {
        heading: "Home Loan",
        subheading1: "Premium",
        s1value: "home_premium",
        subheading2: "Home Loan Interest",
        s2value: "home_interest"
      },
      {
        heading: "Provident Fund",
        subheading1: "Employee Provident Fund contribution",
        s1value: "epf",
        subheading2: "Public Provident Fund Contribution",
        s2value: "ppf"
      },
      {
        heading: "Miscellaneous",
        subheading1: "House Rent (if in a rented house)",
        s1value: "hra",
        subheading2: "Tuition Fee",
        s2value: "tuition_fee"
      }
    ];

    return (
      <>
        <div className="container mb-10">
          <div>
            <div className="h1">Tax Save Form</div>
            <div>(All amounts are in Rupees per annum basis)</div>
            <hr />
          </div>
          <form onSubmit={this.onSubmit}>
            <Form items={items} onChange={this.onChange} />
            <button className="btn btn-outline-success" type="submit">
              Submit
            </button>
          </form>
          <br />
        </div>
      </>
    );
  }
}

SaveForm.propTypes = {
  updateState: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  values: state.values
});

export default connect(
  mapStateToProps,
  { updateState }
)(SaveForm);
