import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { calc } from "../math/calculation";

class Result extends Component {
  state = {
    amt: 0
  };

  calculate = () => {
    var amt = 0;
    var {
      basic_salary,
      age,
      nps,
      house_rent,
      hra,
      tuition_fee,
      girl_child,
      epf,
      ppf,
      life_ins,
      health_ins,
      home_interest,
      home_premium
    } = this.props.values.values;
    this.setState({ values: this.props.values.values });

    // console.log(age, basic_salary, health_ins, nps);
    const amount = calc(
      basic_salary,
      amt,
      age,
      nps,
      house_rent,
      hra,
      tuition_fee,
      girl_child,
      epf,
      ppf,
      life_ins,
      health_ins,
      home_interest,
      home_premium
    );
    console.log(amount);
    this.setState({ amt: amount, status: true });
  };

  render() {
    const { values } = this.props.values;
    console.log(values);
    console.log(this.state);

    return (
      <div className="container mb-10 border-card">
        <br />
        {!this.state.status && (
          <div className="App">
            <button
              className="btn btn-outline-warning"
              onClick={this.calculate}
            >
              Show Results
            </button>
          </div>
        )}
        <br />
        {this.state.status && (
          <div>
            <div className="App">
              <div className="h1">Tax Report</div>
              <div>(All amounts are in Rupees per annum basis)</div>
              <hr></hr>
              <div className="h2">
                The total tax to be paid is {this.state.amt}
              </div>
            </div>
            <br />
            <div className="h4">
              <u>General Deductions</u>
            </div>
            <ol>
              <li>
                <div className="h6">Standard deduction of 50000</div>
              </li>
              <li>
                <div className="h6">
                  Total Deductions under 80C (Home Loan Premium, Life Insurance,
                  EPF, PPF, Tuition Fee, NPS, NSC, Senior Citizen Savings
                  Scheme, Sukanya Samriddhi Yojana, Fixed Deposits, ELSS) is
                  150000
                  <ul>
                    <li>Home Loan Premium: {this.state.values.home_premium}</li>
                    <li>Life Insurance: {this.state.values.life_ins}</li>
                    <li>EPF: {this.state.values.epf}</li>
                    <li>PPF: {this.state.values.ppf}</li>
                    <li>Tuition Fees: {this.state.values.tuition_fee}</li>
                    <li>
                      Fixed Deposits:{" "}
                      {150000 -
                        this.state.values.home_premium -
                        this.state.values.life_ins -
                        this.state.values.epf -
                        this.state.values.ppf -
                        this.state.values.tuition_fee}
                    </li>
                    <li>Sukanya Samriddhi Yojana: 10000</li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="h6">
                  Deduction of Home Loan Interest (upto 2L per annum) is{" "}
                  {this.state.values.home_interest}
                </div>
              </li>
              <li>
                <div className="h6">
                  Deduction of Health Insurance Premium (upto 25k for family,
                  with senior citizen(50k) and parents>60years(50k)) is{" "}
                  {this.state.values.health_ins}
                </div>
              </li>
              <li>
                <div className="h6">
                  House Rent Allowance (HRA) (full or 60k if paid rent without
                  recieving HRA) is
                  <ul>
                    <li>HRA: {this.state.values.hra}</li>
                    <li>House-Rent: {this.state.values.house_rent}</li>
                  </ul>
                </div>
              </li>
            </ol>
            <br />
            <div className="h4">
              <u>Suggestions</u>
            </div>
            <ol>
              <li>
                {" "}
                <div className="h6">
                  You can save 50000 in National Pension Scheme (exepted from
                  taxation under 80CCD)
                </div>
              </li>
              <li>
                {" "}
                <div className="h6">
                  You can have savings account balance (exepted from taxation
                  upto interest of 10000 p.a){" "}
                </div>
              </li>

              <li>
                {" "}
                <div className="h6">
                  You can donate to various Charities (exepted from taxation)
                </div>
              </li>
            </ol>
          </div>
        )}
        <br />
        <br />
      </div>
    );
  }
}

Result.propTypes = {
  values: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  values: state.values
});

export default connect(mapStateToProps)(Result);
