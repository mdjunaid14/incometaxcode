import React, { Component } from "react";
import PieItem from "./PieItem";

export default class PieIterate extends Component {
  render() {
    console.log(this.props.pieData);
    return this.props.pieData.map(data => (
      <PieItem key={data.heading} data={data} />
    ));
  }
}
