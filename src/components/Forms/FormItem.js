import React, { Component } from "react";

export default class FormItem extends Component {
  render() {
    const {
      heading,
      subheading1,
      subheading2,
      s1value,
      s2value
    } = this.props.item;
    return (
      <div>
        <br />
        <div className="h4">
          <u>{heading}</u>
        </div>
        <br />
        <div className="form-group form-row">
          <label className="h5 ml-auto col-md-3">{subheading1}: </label>
          <input
            type="number"
            min="0"
            className="form-control mr-auto col-md-2"
            id={s1value}
            name={s1value}
            onChange={this.props.onChange}
          />
        </div>
        <div className="form-group form-row">
          <label className="h5 ml-auto col-md-3">{subheading2}: </label>
          <input
            type="number"
            min="0"
            className="form-control mr-auto col-md-2"
            id={s2value}
            name={s2value}
            onChange={this.props.onChange}
          />
        </div>
        <br />
      </div>
    );
  }
}
