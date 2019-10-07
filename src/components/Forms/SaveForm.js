import React, { Component } from "react";
import Form from "./Form";
import { updateState } from "../../actions/stateActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { calc } from "../../math/calculation";

class SaveForm extends Component {
  state = {
    age: 0,
    basic_salary: 0,
    epf: 0,
    nps: 0,
    health_ins: 0,
    home_interest: 0,
    home_premium: 0,
    hra: 0,
    life_ins: 0,
    ppf: 0,
    tuition_fee: 0,
    girl_child: 0,
    house_rent: 0
    // is_submitted1: false,
    // is_submitted2: false
  };

  render() {
    const onSubmit = e => {
      e.preventDefault();
      // this.setState({ is_submitted1: true });

      // update values in the initialState (Redux)
      const value = this.state;
      // console.log(value);
      this.props.updateState(value);
      this.props.history.push(`/result`);
    };

    const onChange = e => {
      // console.log(typeof parseInt(e.target.value));
      this.setState({ [e.target.name]: parseInt(e.target.value) });
    };

    const { values } = this.props.values;
    console.log(values);

    var items = [
      {
        heading: "Basic Info",
        subheading1: "Salary",
        s1value: "basic_salary",
        subheading2: "Age",
        s2value: "age"
      },
      {
        heading: "House Rent",
        subheading1: "House rent paid per annum",
        s1value: "house_rent",
        subheading2: "House Rent Allowance recieved from employer",
        s2value: "hra"
      },
      {
        heading: "Miscellaneous",
        subheading1: "Total tuition fee of children per annum",
        s1value: "tuition_fee",
        subheading2: "How many girl children below 10 years age",
        s2value: "girl_child"
      },
      {
        heading: "Provident Fund",
        subheading1: "Employee Provident Fund contribution per annum",
        s1value: "epf",
        subheading2: "Public Provident Fund Contribution per annum",
        s2value: "ppf"
      },
      {
        heading: "Insurance",
        subheading1: "Health Insurance Premium per annum",
        s1value: "health_ins",
        subheading2: "Life Insurance Premium per annum",
        s2value: "life_ins"
      },
      {
        heading: "Home Loan (if taken)",
        subheading1: "Premium per annum",
        s1value: "home_premium",
        subheading2: "Home Loan Interest per annum",
        s2value: "home_interest"
      }
    ];

    return (
      <div className="App">
        <div className="container mb-10 border-card">
          <div>
            <div className="h1">Tax Save Form</div>
            <div>(All amounts are in Rupees per annum basis)</div>
            <hr />
          </div>

          <form onSubmit={onSubmit}>
            <Form items={items} onChange={onChange} />
            <button className="btn btn-outline-success" type="submit">
              Submit
            </button>
          </form>

          <br />
        </div>
      </div>
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
