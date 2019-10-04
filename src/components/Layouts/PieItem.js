import React, { Component } from "react";
import ReactMinimalPieChart from "react-minimal-pie-chart";

export default class PieItem extends Component {
  state = {
    list1: [
      {
        title: "Salary",
        value: 0,
        color: "#E38627"
      },
      { title: "Tax", value: 0, color: "#C13C37" }
    ],
    list2: [
      { title: "Salary", value: 0, color: "#E38627" },
      { title: "Tax", value: 0, color: "#C13C37" },
      { title: "Tax Saved", value: 0, color: "#6A2135" }
    ],
    list3: [
      { title: "Salary", value: 0, color: "#E38627" },
      { title: "Tax", value: 0, color: "#C13C37" },
      { title: "Std Deduction", value: 0, color: "#6A2135" },
      { title: "Deductions", value: 0, color: "#6A2135" },
      {
        title: "National Pension System",
        value: 0,
        color: "#6A2135"
      },
      {
        title: "Home Loan Interest",
        value: 0,
        color: "#6A2135"
      },
      {
        title: "Health Insurance Premium",
        value: 0,
        color: "#6A2135"
      },
      {
        title: "HRA",
        value: 0,
        color: "#6A2135"
      },
      {
        title: "House Rent",
        value: 0,
        color: "#6A2135"
      }
    ],
    list4: [
      { title: "Life Insurance", value: 0, color: "#E38627" },
      {
        title: "Home Loan Premium",
        value: 0,
        color: "#C13C37"
      },
      { title: "EPF", value: 0, color: "#6A2135" },
      { title: "PPF", value: 0, color: "#6A2135" },
      {
        title: "Tuition Fee",
        value: 0,
        color: "#6A2135"
      },
      {
        title: "Fixed Deposits",
        value: 0,
        color: "#6A2135"
      },
      {
        title: "Sukanya Samriddhi Yojana",
        value: 0,
        color: "#6A2135"
      }
    ]
  };

  render() {
    console.log(this.props.props);
    const {
      amt,
      deductions_calc,
      fixed_deposit_calc,
      nps_calc,
      ssy_calc,
      status,
      std_calc
    } = this.props.props;

    const {
      age,
      basic_salary,
      epf,
      girl_child,
      health_ins,
      home_interest,
      home_premium,
      house_rent,
      hra,
      life_ins,
      nps,
      ppf,
      tuition_fee
    } = this.props.props.values;
    console.log(this.props.props.values.amt);
    // this.setState({})

    const pieData1 = this;
    return (
      <div>
        <div className="d-flex">
          {/* Normal Taxation */}
          <div className="col-md-6">
            <div className="h5">Normal Taxation</div>
            <div>{nps_calc}</div>
            <ReactMinimalPieChart
              data={[
                {
                  title: "Salary",
                  value: 0,
                  color: "#E38627"
                },
                { title: "Tax", value: 0, color: "#C13C37" }
              ]}
              // pie-chart size control
              style={{ height: "300px" }}
              // donut chart pieces
              lineWidth={15}
              paddingAngle={5}
              // outer labeling
              label
              labelStyle={{
                fontSize: "5px",
                fontFamily: "sans-serif"
              }}
              radius={42}
              labelPosition={112}
              // animate clockwise
              animate
            />
          </div>
          {/* Saved Taxation */}
          <div className="col-md-6">
            <div className="h5">After Tax Savings</div>
            <ReactMinimalPieChart
              data={[
                { title: "Salary", value: 10, color: "#E38627" },
                { title: "Tax", value: 15, color: "#C13C37" },
                { title: "Tax Saved", value: 15, color: "#6A2135" }
              ]}
              // pie-chart size control
              style={{ height: "300px" }}
              // donut chart pieces
              lineWidth={15}
              paddingAngle={5}
              // outer labeling
              label
              labelStyle={{
                fontSize: "5px",
                fontFamily: "sans-serif"
              }}
              radius={42}
              labelPosition={112}
              // animate clockwise
              animate
            />
          </div>
        </div>

        <div className="d-flex">
          {/* Tax distribution */}
          <div className="col-md-6">
            <div className="h5">Tax Distribution</div>
            <ReactMinimalPieChart
              data={[
                { title: "Salary", value: 10, color: "#E38627" },
                { title: "Tax", value: 15, color: "#C13C37" },
                { title: "Std Deduction", value: 20, color: "#6A2135" },
                { title: "Deductions", value: 20, color: "#6A2135" },
                {
                  title: "National Pension System",
                  value: 20,
                  color: "#6A2135"
                },
                {
                  title: "Home Loan Interest",
                  value: 20,
                  color: "#6A2135"
                },
                {
                  title: "Health Insurance Premium",
                  value: 20,
                  color: "#6A2135"
                },
                {
                  title: "HRA",
                  value: 20,
                  color: "#6A2135"
                },
                {
                  title: "House Rent",
                  value: 20,
                  color: "#6A2135"
                }
              ]}
              // pie-chart size control
              style={{ height: "300px" }}
              // donut chart pieces
              lineWidth={15}
              paddingAngle={5}
              // outer labeling
              label
              labelStyle={{
                fontSize: "5px",
                fontFamily: "sans-serif"
              }}
              radius={42}
              labelPosition={112}
              // animate clockwise
              animate
            />
          </div>
          {/* Tax Deduction Distribution */}
          <div className="col-md-6">
            <div className="h5">Tax Deductions</div>
            <ReactMinimalPieChart
              data={[
                { title: "Life Insurance", value: 10, color: "#E38627" },
                {
                  title: "Home Loan Premium",
                  value: 15,
                  color: "#C13C37"
                },
                { title: "EPF", value: 20, color: "#6A2135" },
                { title: "PPF", value: 20, color: "#6A2135" },
                {
                  title: "Tuition Fee",
                  value: 20,
                  color: "#6A2135"
                },
                {
                  title: "Fixed Deposits",
                  value: 20,
                  color: "#6A2135"
                },
                {
                  title: "Sukanya Samriddhi Yojana",
                  value: 20,
                  color: "#6A2135"
                }
              ]}
              // pie-chart size control
              style={{ height: "300px" }}
              // donut chart pieces
              lineWidth={15}
              paddingAngle={5}
              // outer labeling
              label
              labelStyle={{
                fontSize: "5px",
                fontFamily: "sans-serif"
              }}
              radius={42}
              labelPosition={112}
              // animate clockwise
              animate
            />
          </div>
        </div>
      </div>
    );
  }
}
