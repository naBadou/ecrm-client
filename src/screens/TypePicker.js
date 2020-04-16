import React, { Component } from "react";
import Axios from "axios";
import { upgradeUserType } from "../actions/authentication";
import { connect } from "react-redux";

class TypePicker extends Component {
  render() {
    return (
      <div>
        Pick a Type
        <br />
        <br />
        <br />
        <br />
        <button
          onClick={() =>
            this.props.upgradeUserType("manager", this.props.fireID)
          }
        >
          MANAGER
        </button>
        <br />
        <br />
        <button
          onClick={() =>
            this.props.upgradeUserType("transporter", this.props.fireID)
          }
        >
          TRANSPORTER
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { upgradeUserType })(TypePicker);
