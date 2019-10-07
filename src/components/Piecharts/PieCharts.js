import React, { Component } from "react";
import PieItems from "./PieItems";

export default class PieCharts extends Component {
  render() {
    console.log(this.props.props);
    return (
      <div>
        <PieItems props={this.props.props} />
      </div>
    );
  }
}
