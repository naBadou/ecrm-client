import React, { Component } from "react";
import { connect } from "react-redux";

import Authentication from "./screens/Authentication";
import { Switch, Route } from "react-router-dom";
import Application from "./Application/index";
import Landing from "./screens/Landing";
import TypePicker from "./screens/TypePicker";
import { checkingUserProcess } from "./actions/authentication";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.checkingUserProcess();
  }

  render() {
    const { appReady, account } = this.props;

    if (!appReady) {
      return <div>LOADING</div>;
    } else {
      const isGuest =
        Object.keys(account).length === 0 && account.constructor === Object;
      if (isGuest) {
        return (
          <Switch>
            <Route path="/auth" component={Authentication} />
            <Route exact path="/" component={Landing} />
            <Route component={Authentication} />
          </Switch>
        );
      }
      if (!isGuest) {
        const isManager = account.type === "manager";
        const isTransporter = account.type === "transporter";
        const isAdmin = account.type === "admin";
        const isAnyType = isManager || isAdmin || isTransporter;
        // const noTypeYet = (!isManager && !isTransporter) || !account.type;

        if (!isAnyType) {
          return (
            <Switch>
              <Route>
                <TypePicker />
              </Route>
            </Switch>
          );
        }

        if (isAnyType) {
          return <Application />;
        }
        // end of !isGuest
      }
    }
  }
}
const mapStateToProps = (state) => ({
  appReady: state.auth.appReady,
  account: state.auth.account,
});

export default connect(mapStateToProps, { checkingUserProcess })(App);
