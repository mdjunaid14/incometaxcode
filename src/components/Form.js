import React, { Component } from "react";
import FormItem from "./FormItem";

export default class Form extends Component {
  render() {
    return this.props.items.map(item => (
      <FormItem item={item} onChange={this.props.onChange} />
    ));
  }
}
