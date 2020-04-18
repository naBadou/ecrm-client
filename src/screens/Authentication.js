import React, { Component } from "react";
import { Colors } from "../design/colors";
import * as Icon from "react-feather";
import { registerProcess, fireApp } from "../actions/authentication";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

const panel_width = 570;
const right_width = 340;

class Authentication extends Component {
  constructor(props) {
    super(props);

    this.state = {
      route: "register",
      message: "",
    };
  }

  render() {
    const { route, message } = this.state;
    const onLogin = route === "login";
    const onRegister = route === "register";
    const styles = {
      wrapper: {
        display: "flex",
        flexDirection: "row",
        width: panel_width,
        height: 400,
      },
      left: {
        backgroundColor: "#333",
        flex: 1,
        display: "flex",
        flexDirection: "column",
      },
      logo: {
        height: 250,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      options: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 40,
      },
      option: {
        color: "#ececec",
        fontSize: 12,
        fontWeight: "400",
        paddingTop: 5,
        cursor: "pointer",
      },

      right: {
        backgroundColor: "#ffffff",
        width: right_width,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      },
      titling: {
        backgroundColor: "#ff5722",
        padding: "25px 0",
        display: "flex",
        flexDirection: "Column",
        alignItems: "center",
        justifyContent: "space-evenly",
      },
      title: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 22,
      },

      message: { color: "#333", paddingTop: 2 },

      forming: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "15px",
      },
      inputed: {
        backgroundColor: "#f7f7f7",
        color: "#a2a2a2",
        height: 50,
        display: "flex",
        flexDirection: "row",
        width: right_width - 60,
        margin: "10px 0",
      },

      clickedWrapper: {
        height: 50,
        display: "flex",
        flexDirection: "row",
        width: right_width - 60,
        marginTop: 10,
      },
      clicked: {
        backgroundColor: "#0737FC",
        color: "#fff",
      },
      icon: {
        width: 50,
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      trans: {
        width: (right_width - 50) / 2,
        backgroundColor: Colors.trans,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        color: "white",
        borderRadius: 20,
      },
      mana: {
        width: (right_width - 50) / 2,
        backgroundColor: Colors.mana,
        marginRight: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        borderRadius: 20,
        color: "white",
      },
      types: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        padding: 20,
      },
    };
    return (
      <div style={styles.wrapper}>
        <div style={styles.left}>
          <Link style={styles.logo} to="/">
            logo
          </Link>
          <div style={styles.options}>
            {onLogin && (
              <span
                style={styles.option}
                onClick={() => this.setState({ route: "register" })}
              >
                Register screen
              </span>
            )}
            {onRegister && (
              <span
                style={styles.option}
                onClick={() => this.setState({ route: "login" })}
              >
                Login screen
              </span>
            )}

            <span style={styles.option}> Forgot password ?</span>
          </div>
        </div>
        <div style={styles.right}>
          <div style={styles.titling}>
            <div style={styles.title}>
              {onRegister ? "Create a new account" : onLogin ? "Login" : null}
            </div>
            <div style={styles.message}>{message}</div>
          </div>

          <form style={styles.forming}>
            <div style={styles.inputed}>
              <span style={styles.icon}>
                <Icon.User color="#a2a2a2" size={20} />
              </span>
              <input
                placeholder="e-mail"
                type="text"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
            <div style={styles.inputed}>
              <span style={styles.icon}>
                <Icon.Lock color="#a2a2a2" size={20} />
              </span>
              <input
                placeholder="password"
                type="password"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>
            {onRegister && (
              <div style={styles.inputed}>
                <span style={styles.icon}>
                  <Icon.Lock color="#a2a2a2" size={20} />
                </span>
                <input placeholder="Repeat password" />
              </div>
            )}

            <div style={styles.clickedWrapper}>
              <button
                style={styles.clicked}
                type="submit"
                onClick={(e) => this._handleSubmit(e)}
              >
                Button
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  _handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.route === "register") {
      if (!this.state.email) {
        return this.setState({ message: "please input email" });
      }
      if (!this.state.password) {
        return this.setState({ message: "please input password" });
      }
      this.props.registerProcess(this.state.email, this.state.password);
    }
    if (this.state.route === "login") {
      if (!this.state.email) {
        return this.setState({ message: "please input email" });
      }
      if (!this.state.password) {
        return this.setState({ message: "please input password" });
      }
      fireApp
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password);
    }
  };
}
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { registerProcess })(Authentication);
