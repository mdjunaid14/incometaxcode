import React, { Component } from "react";
import FormItem from "./FormItem";

export default class Form extends Component {
  render() {
    return this.props.items.map(item => (
      <FormItem key={item.id} item={item} onChange={this.props.onChange} />
    ));
  }
}
