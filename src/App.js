import React, { Component } from "react";
import { connect } from "react-redux";
import { fireListener } from "./actions/authentication";

import Authentication from "./screens/Authentication";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Landing from "./screens/Landing";
import TypePicker from "./screens/TypePicker";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(fireListener());
  }

  render() {
    const { isLogged, appReady, user } = this.props;

    if (!appReady) {
      return <div>LOADING</div>;
    } else {
      if (!isLogged) {
        return (
          <Switch>
            <Route path="/auth" component={Authentication} />
            <Route exact path="/" component={Landing} />
            <Route component={Authentication} />
          </Switch>
        );
      }
      if (isLogged && !user.type) {
        return (
          <Switch>
            <Route>
              <TypePicker fireID={user.fireID} />
            </Route>
          </Switch>
        );
      }
      if (
        (isLogged && user.type === "manager") ||
        (isLogged && user.type === "transporter")
      ) {
        return (
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route component={Dashboard} />
          </Switch>
        );
      }
    }
  }
}
const mapStateToProps = (state) => ({
  appReady: state.auth.appReady,
  isLogged: state.auth.isLogged,
  user: state.auth.user,
});
export default connect(mapStateToProps)(App);
