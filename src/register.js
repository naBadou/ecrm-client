import React, { Component } from "react";
import { Link } from "react-router-dom";
import fire from "./config/fire";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
    };
  }
  handleRegister = (e) => {
    e.preventDefault();
    const data1 = {
      email: this.state.email,
      password: this.state.password,
    };
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        if (u) {
          console.log("registred");
        } else {
          console.log("not registred");
        }
      })
      .catch((err) => console.log(err));

    console.log(data1);
  };
  render() {
    if (this.state.step === 2) {
    }
    return (
      <div>
        <h2 style={{ padding: 10, margin: "5px 0" }}> Register screen</h2>

        <p style={{ color: "gray", fontSize: 12, textAlign: "center" }}>
          Message
        </p>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="email"
            style={{ padding: 10, margin: "5px 0" }}
            placeholder="email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <input
            style={{ padding: 10, margin: "5px 0" }}
            placeholder="password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />

          <button
            type="submit"
            onClick={(e) => this.handleRegister(e)}
            style={{
              padding: 10,
              margin: "5px 0",
              background: "white",
              textAlign: "center",
            }}
          >
            Submit Register
          </button>
          <Link
            style={{
              padding: 10,
              margin: "5px 0",
              background: "white",
              textAlign: "center",
            }}
            to="/"
          >
            back to home page
          </Link>
        </form>
      </div>
    );
  }
}
