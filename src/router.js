import React, { Component } from "react";
import { connect } from "react-redux";
import { fireCheckingProcess } from "./actions/authentication";

import ManagerRouter from "./_Manager/index";
import TransporterRouter from "./_Transporter/index";
import PublicPages from "./publicPages";

export class App extends Component {
  componentDidMount() {
    this.props.fireCheckingProcess();
  }

  render() {
    const { loading, accountType } = this.props;
    const isManager = accountType === "manager";
    const isTransporter = accountType === "transporter";
    const isNoType = accountType === "no-type";
    const isVisitor = accountType === "visitor";

    if (isTransporter) {
      return <TransporterRouter />;
    }
    if (isManager) {
      return <ManagerRouter />;
    }
    if (isNoType) {
      return <div> u should pick a type a tebi</div>;
    }
    if (isVisitor) {
      return <ManagerRouter />;
      // return <PublicPages />;
    }
    if (loading) {
      return <div> LOADING </div>;
    }
  }
}

const mapStateToProps = (state) => ({
  accountType: state.auth.accountType,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { fireCheckingProcess })(App);
