import React, { Component } from "react";
import { connect } from "react-redux";
import { fireApp } from "../actions/authentication";

class Dashboard extends Component {
  render() {
    return (
      <div>
        Dashboard
        <br />
        <br />
        <button
          style={{ background: "red", color: "white" }}
          onClick={() => fireApp.auth().signOut()}
        >
          LOGOUT
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Dashboard);
