import React, { Component } from "react";
import { Link } from "react-router-dom";
import fire from "./config/fire";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handleLogin = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(({ user }) => this.setState({ fireID: user.uid }))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <h2 style={{ padding: 10, margin: "5px 0" }}> Login screen</h2>

        <p style={{ color: "gray", fontSize: 12, textAlign: "center" }}>
          Message
        </p>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <input
            style={{ padding: 10, margin: "5px 0" }}
            placeholder="email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <input
            style={{ padding: 10, margin: "5px 0" }}
            placeholder="password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <div
            style={{
              padding: 10,
              margin: "5px 0",
              background: "white",
              textAlign: "center",
            }}
          >
            Submit Login
          </div>
          <button
            type="submit"
            style={{
              padding: 10,
              margin: "5px 0",
              background: "white",
              textAlign: "center",
            }}
            to="/"
            onClick={(e) => this.handleLogin(e)}
          >
            back to home page
          </button>
        </form>
      </div>
    );
  }
}
