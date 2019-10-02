import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { calc } from "../math/calculation";

class Result extends Component {
  render() {
    const { values } = this.props.values;
    console.log(values);
    return <div>Heyy</div>;
  }
}

Result.propTypes = {
  values: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  values: state.values
});

export default connect(mapStateToProps)(Result);
