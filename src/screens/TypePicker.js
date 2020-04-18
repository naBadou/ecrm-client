import React, { Component } from "react";

import { upgradeUserType } from "../actions/authentication";
import { connect } from "react-redux";

class TypePicker extends Component {
  render() {
    return (
      <form>
        Pick a Type
        <br />
        <br />
        <br />
        <br />
        <button onClick={(e) => this.makeType(e, "manager")}>MANAGER</button>
        <br />
        <br />
        <button onClick={(e) => this.makeType(e, "transporter")}>
          TRANSPORTER
        </button>
      </form>
    );
  }

  makeType = (e, type) => {
    e.preventDefault();
    console.log("uid just befor picking type", this.props.account.uid);
    this.props.upgradeUserType(type, this.props.account.uid);
  };
}
const mapStateToProps = (state) => ({
  account: state.auth.account,
});

export default connect(mapStateToProps, { upgradeUserType })(TypePicker);
