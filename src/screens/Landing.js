import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <div>
        Landing page
        <br />
        <br />
        <br />
        <br />
        <Link to="/auth">Authenticate </Link>
      </div>
    );
  }
}
