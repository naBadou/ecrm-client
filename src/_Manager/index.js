import React, { Component } from "react";
import { Menu, X, User, MessageSquare, Plus, Home } from "react-feather";
import { NavLink, Switch, Route } from "react-router-dom";

import Transporters from "./transporters";
import Messanger from "./messanger";

export default class ManagerRouter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hamburgerMenu: false,
      userMenu: false,
    };
  }

  closeMenus = () => this.setState({ hamburgerMenu: false, userMenu: false });

  hamburgerClick = () =>
    this.state.hamburgerMenu
      ? this.setState({ hamburgerMenu: false })
      : this.setState({ hamburgerMenu: true, userMenu: false });

  userClick = () =>
    this.state.userMenu
      ? this.setState({ userMenu: false })
      : this.setState({ userMenu: true, hamburgerMenu: false });

  render() {
    const { hamburgerMenu, userMenu } = this.state;
    return (
      <>
        <div className="pageContainer">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/orders" component={Orders} />
            <Route path="/transporters" component={Transporters} />
            <Route path="/customers" component={Customers} />
            <Route path="/messenger" component={Messanger} />
          </Switch>
        </div>
        {/* Mobile shit */}
        <div className="bottomBar">
          <div className="bottomBar-container">
            <div
              className={
                hamburgerMenu
                  ? "bottomBarHamburger active"
                  : "bottomBarHamburger"
              }
              onClick={() => this.hamburgerClick()}
            >
              {hamburgerMenu ? <X /> : <Menu />}
            </div>
            <NavLink
              to="/messenger"
              className="bottomBarItem"
              onClick={() => this.closeMenus()}
            >
              <MessageSquare size={18} />
            </NavLink>
            <NavLink
              exact
              to="/"
              className="bottomBarItem"
              onClick={() => this.closeMenus()}
            >
              <Home size={18} />
            </NavLink>
            <NavLink
              to="/add"
              className="bottomBarItem"
              onClick={() => this.closeMenus()}
            >
              <Plus size={18} />
            </NavLink>
            <div
              className={userMenu ? "bottomBarUser active" : "bottomBarUser"}
              onClick={() => this.userClick()}
            >
              {userMenu ? <X /> : <User />}
            </div>
          </div>
        </div>
        {hamburgerMenu && (
          <div className="hamburgerMenu">
            <NavLink
              to="/transporters"
              style={{ margin: 10 }}
              onClick={() => this.closeMenus()}
            >
              Transporters
            </NavLink>
          </div>
        )}
        {userMenu && <div className="userMenu"> User</div>}
      </>
    );
  }
}

const Dashboard = () => <div> Tableau de bord </div>;
const Orders = () => <div> Commandes </div>;
// const Transporters = () => <div> Livreurs</div>;
const Customers = () => <div> customers </div>;
