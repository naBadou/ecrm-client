import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard/Dashboard";
import Contracts from "./Contracts/Contracts";
import Orders from "./Orders/Orders";
import Customers from "./Customers/Customers";

import Products from "./Products/Products";
import { connect } from "react-redux";
import ExploreTransporters from "../_Manager/transporters/exploreTransporters";
import { Dimensions } from "../design/layout";
import TransporterProfil from "../_Manager/transporters/transporterProfil";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { account } = this.props;
    const isTrans = false;
    const isMana = true;
    const isAdmin = false;

    const styles = {
      root: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
      },
      pageContainer: {
        flex: 1,
        marginLeft: Dimensions.sidebarWidth,
        display: "flex",
        justifyContent: "center",
      },
      pageWrapper: {
        padding: "20px 0",
        minHeight: "500vh",
        maxWidth: Dimensions.wrapperWidth,
        minWidth: Dimensions.wrapperWidth,
        overflow: "hidden",
      },
    };

    return (
      <div style={styles.root}>
        <Sidebar />
        <div style={styles.pageContainer}>
          <div style={styles.pageWrapper}>
            {isMana ? (
              <Switch>
                <Route
                  exact
                  path="/transporters/explore"
                  component={ExploreTransporters}
                />
                <Route
                  exact
                  path="/transporters/:fireID"
                  component={TransporterProfil}
                />

                <Route path="/dashboard" component={Dashboard} />
                <Route path="/contracts" component={Contracts} />
                <Route path="/orders" component={Orders} />
                <Route path="/costumers" component={Customers} />
                <Route path="/products" component={Products} />
                <Route component={Dashboard} />
              </Switch>
            ) : isTrans ? (
              <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/contracts" component={Contracts} />
                <Route path="/transportations" component={Orders} />
                <Route component={Dashboard} />
              </Switch>
            ) : isAdmin ? (
              <Switch></Switch>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  account: state.auth.account,
});
export default connect(mapStateToProps)(Application);
