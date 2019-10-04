import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { calc } from "../math/calculation";
import PieCharts from "./Layouts/PieCharts";

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
    const [
      sal_calc,
      amount_calc,
      fixed_deposit_calc,
      ssy_calc,
      nps_calc,
      deductions_calc,
      std_calc
    ] = calc(
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
    console.log(sal_calc, amount_calc);
    this.setState({
      amt: amount_calc,
      status: true,
      fixed_deposit_calc: fixed_deposit_calc,
      ssy_calc: ssy_calc,
      nps_calc: nps_calc,
      deductions_calc: deductions_calc,
      std_calc: std_calc
    });
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
              <br />
              <div className="h2">
                The total tax to be paid is {this.state.amt}
              </div>
              <br />
              <PieCharts props={this.state} />
              <br />
            </div>
            <br />
            <div className="h4">
              <u>General Deductions</u>
            </div>
            <ol>
              <li>
                <div className="h6">
                  Standard deduction of {this.state.std_calc}
                </div>
              </li>
              <li>
                <div className="h6">
                  National Pension Scheme of {this.state.nps_calc}
                </div>
              </li>
              <li>
                <div className="h6">
                  Total Deductions under 80C (Home Loan Premium, Life Insurance,
                  EPF, PPF, Tuition Fee, NPS, NSC, Senior Citizen Savings
                  Scheme, Sukanya Samriddhi Yojana, Fixed Deposits, ELSS) is{" "}
                  {this.state.deductions_calc}
                  <ul>
                    <li>Home Loan Premium: {this.state.values.home_premium}</li>
                    <li>Life Insurance: {this.state.values.life_ins}</li>
                    <li>EPF: {this.state.values.epf}</li>
                    <li>PPF: {this.state.values.ppf}</li>
                    <li>Tuition Fees: {this.state.values.tuition_fee}</li>
                    <li>Fixed Deposits: {this.state.fixed_deposit_calc}</li>
                    <li>
                      Sukanya Samriddhi Yojana (if having girl child below the
                      age of 10 years): {this.state.ssy_calc}
                    </li>
                  </ul>
                  <br />
                  <div className="p">
                    "Note: If the maximum tax exemption in this clause is capped
                    to 150000"{" "}
                  </div>
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
                  You can save 50000 in National Pension Scheme (exempted from
                  taxation under 80CCD)
                </div>
              </li>{" "}
              <li>
                {" "}
                <div className="h6">
                  If you are a senior citizen, then you can avail the Senior
                  Citizens Savings Scheme by the Govt. of India. You can get a
                  tax exemption of upto 1.5L and much higher interest rates than
                  fixed deposits.(Note, the interest obtained in this scheme is
                  taxable )
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
