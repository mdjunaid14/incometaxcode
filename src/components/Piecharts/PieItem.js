import React, { Component } from "react";
import PieChart from "react-minimal-pie-chart";

export default class PieItem extends Component {
  render() {
    const { heading, content } = this.props.data;
    console.log(this.props.data.content);
    return (
      <div>
        <div className="h5">{heading}</div>
        <PieChart
          data={content}
          // pie-chart size control
          style={{
            textAlign: "center",
            margin: "20px"
          }}
          // donut chart pieces
          lineWidth={45}
          paddingAngle={5}
          // animate clockwise
          animate
        />
      </div>
    );
  }
}
