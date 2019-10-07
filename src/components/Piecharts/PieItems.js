import React, { Component } from "react";
// import PieChart from "react-minimal-pie-chart";
import PieIterate from "./PieIterate";

export default class PieItems extends Component {
  state = {
    list1: [
      {
        title: "Salary",
        value: 38,
        color: "#3A67FA"
      },
      { title: "Tax", value: 27, color: "#28B1C6" }
    ],
    list2: [
      { title: "Salary", value: 38, color: "#3A67FA" },
      { title: "Tax", value: 38, color: "#28B1C6" },
      { title: "Tax Saved", value: 38, color: "#FFF204" }
    ],
    list3: [
      { title: "Salary", value: 38, color: "#3A67FA" },
      { title: "Tax", value: 38, color: "#28B1C6" },
      { title: "Std Deduction", value: 38, color: "#E8413D" },
      { title: "Deductions", value: 38, color: "#FDCB09" },
      {
        title: "National Pension System",
        value: 38,
        color: "#47A34B"
      },
      {
        title: "Home Loan Interest",
        value: 38,
        color: "#962EAE"
      },
      {
        title: "Health Insurance Premium",
        value: 38,
        color: "#9A4993"
      },
      {
        title: "HRA",
        value: 38,
        color: "#CA1F61"
      }
    ],
    list4: [
      { title: "Life Insurance", value: 38, color: "#845555" },
      {
        title: "Home Loan Premium",
        value: 38,
        color: "#962EAE"
      },
      { title: "EPF", value: 38, color: "#3C3C3C" },
      { title: "PPF", value: 38, color: "#F7F7F7" },
      {
        title: "Tuition Fee",
        value: 38,
        color: "#FB9107"
      },
      {
        title: "Fixed Deposits",
        value: 38,
        color: "#191C3C"
      },
      {
        title: "Sukanya Samriddhi Yojana",
        value: 38,
        color: "#E21607"
      }
    ]
  };

  onRequest = () => {
    console.log(this.state);
    var {
      amt,
      deductions_calc,
      fixed_deposit_calc,
      nps_calc,
      ssy_calc,
      //   status,
      std_calc,
      sal_aftertax,
      amt_normal,
      sal_normal
    } = this.props.props;

    var {
      //   age,
      basic_salary,
      epf,
      //   girl_child,
      health_ins,
      home_interest,
      home_premium,
      house_rent,
      hra,
      life_ins,
      //   nps,
      ppf,
      tuition_fee
    } = this.props.props.values;

    // assign hra_value out of hra, house_rent
    var hra_value = hra;
    if (hra <= 0) {
      hra_value = house_rent;
    }

    var taxSaved = basic_salary - amt - sal_aftertax;
    var Arr1 = [sal_normal, amt_normal];
    var Arr2 = [sal_aftertax, amt, taxSaved];
    var Arr3 = [
      sal_aftertax,
      amt,
      std_calc,
      deductions_calc,
      nps_calc,
      home_interest,
      health_ins,
      hra_value
    ];
    var Arr4 = [
      life_ins,
      home_premium,
      epf,
      ppf,
      tuition_fee,
      fixed_deposit_calc,
      ssy_calc
    ];

    // list1 value assignment
    var i = 0;
    this.state.list1.map(list => {
      list.value = Arr1[i];
      i += 1;
      return list.value;
    });

    // list2 value assignment
    i = 0;
    this.state.list2.map(list => {
      list.value = Arr2[i];
      i += 1;
      return list.value;
    });

    // list3 value assignment
    i = 0;
    this.state.list3.map(list => {
      list.value = Arr3[i];
      i += 1;
      return list.value;
    });

    // list4 value assignment
    i = 0;
    this.state.list4.map(list => {
      list.value = Arr4[i];
      i += 1;
      return list.value;
    });
  };

  render() {
    console.log(this.props.props);
    this.onRequest();
    console.log(this.state);

    const pieData1 = this.state.list1.map(item1 => {
      return item1;
    });
    const pieData2 = this.state.list2.map(item2 => {
      return item2;
    });
    const pieData3 = this.state.list3.map(item3 => {
      return item3;
    });
    const pieData4 = this.state.list4.map(item4 => {
      return item4;
    });

    const pieData = [
      { heading: "Normal Taxation", content: pieData1 },
      { heading: "After Tax Savings", content: pieData2 },
      { heading: "Tax Distribution", content: pieData3 },
      { heading: "Tax Deductions", content: pieData4 }
    ];

    console.log(pieData);
    // console.log(this.state.list1); Not able to use it inside return function. Hence, not used.

    return (
      <div>
        <div className="d-flex" style={{ marginTop: "45px" }}>
          <div className="col-md-9">
            <div className="d-flex flex-wrap">
              <PieIterate pieData={pieData} />
            </div>
          </div>
          <div>
            <ol>
              <li className="listStyle">
                <div className="box" style={{ backgroundColor: "#3A67FA" }}>
                  {" "}
                </div>{" "}
                Salary
              </li>
              <li className="listStyle">
                <div className="box" style={{ backgroundColor: "#28B1C6" }}>
                  {" "}
                </div>{" "}
                Tax
              </li>
              <li className="listStyle">
                <div className="box" style={{ backgroundColor: "#FFF204" }}>
                  {" "}
                </div>{" "}
                Tax Saved
              </li>
              <li className="listStyle">
                <div className="box" style={{ backgroundColor: "#E8413D" }}>
                  {" "}
                </div>{" "}
                Std Deduction
              </li>
              <li className="listStyle">
                <div className="box" style={{ backgroundColor: "#FDCB09" }}>
                  {" "}
                </div>{" "}
                Deductions
              </li>
              <li className="listStyle">
                <div className="box" style={{ backgroundColor: "#47A34B" }}>
                  {" "}
                </div>{" "}
                National Pension System
              </li>
              <li className="listStyle">
                <div className="box" style={{ backgroundColor: "rosybrown" }}>
                  {" "}
                </div>{" "}
                Home Loan Interest
              </li>
              <li className="listStyle">
                <div className="box" style={{ backgroundColor: "#CA1F61" }}>
                  {" "}
                </div>{" "}
                HRA
              </li>
              <li className="listStyle">
                <div className="box" style={{ backgroundColor: "#962EAE" }}>
                  {" "}
                </div>{" "}
                Home Loan Premium
              </li>
              <li className="listStyle">
                <div className="box" style={{ backgroundColor: "purple" }}>
                  {" "}
                </div>{" "}
                Health Insurance Premium
              </li>
              <li className="listStyle">
                <div className="box" style={{ backgroundColor: "#845555" }}>
                  {" "}
                </div>{" "}
                Life Insurance
              </li>
              <li className="listStyle">
                <div className="box" style={{ backgroundColor: "#3C3C3C" }}>
                  {" "}
                </div>{" "}
                EPF
              </li>
              <li className="listStyle">
                <div className="box" style={{ backgroundColor: "#F7F7F7" }}>
                  {" "}
                </div>{" "}
                PPF
              </li>
              <li className="listStyle">
                <div className="box" style={{ backgroundColor: "#FB9107" }}>
                  {" "}
                </div>{" "}
                Tuition Fee
              </li>
              <li className="listStyle">
                <div className="box" style={{ backgroundColor: "#191C3C" }}>
                  {" "}
                </div>{" "}
                Fixed Deposits
              </li>
              <li className="listStyle">
                <div className="box" style={{ backgroundColor: "#E21607" }}>
                  {" "}
                </div>{" "}
                Sukanya Samriddhi Yojana
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
