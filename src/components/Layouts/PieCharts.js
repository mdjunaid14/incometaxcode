import React, { Component } from "react";
import PieItem from "./PieItem";

export default class PieCharts extends Component {
  render() {
    console.log(this.props.props);
    return (
      <div>
        <PieItem props={this.props.props} />
      </div>
    );
  }
}
