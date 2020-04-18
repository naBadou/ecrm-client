import React, { Component } from "react";
import { Colors } from "../design/colors";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fireApp } from "../actions/authentication";
import { Dimensions } from "../design/layout";
import { Folder } from "react-feather";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user } = this.props;
    // const isTrans = user.type === "transporter";
    // const isMana = user.type === "manager";

    const isMana = true;
    const isTrans = false;

    const isColor = Colors.default;
    const styles = {
      sidebar: {
        width: Dimensions.sidebarWidth,
        backgroundColor: Colors.white,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        alignItems: "center",
        padding: 20,
      },
      avatar: { position: "relative", marginBottom: 5 },
      avatarLabel: {
        backgroundColor: isColor,
        width: 30,
        height: 30,
        position: "absolute",
        bottom: 0,
        right: 0,
        borderRadius: 100 * 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 10,
        fontWeight: "500",
        color: Colors.white,
        border: "2.5px solid",
      },

      avatarImage: {
        borderRadius: 100 * 2,
        height: Dimensions.sidebarWidth / 3,
      },
      username: { fontWeight: "700", fontSize: 16 },
      type: { color: isColor, fontSize: 14, marginBottom: 20 },
      buttons: { display: "flex", flexDirection: "row" },
      button1: { fontSize: 13, backgroundColor: "red" },
      button2: { fontSize: 13, backgroundColor: isColor },

      menu: {
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        background: Colors.light,
        height: 45,
        borderRadius: 4,
        fontSize: 15,
        color: Colors.grey,
        margin: 1.5,
        fontWeight: "500",
        width: "-webkit-fill-available",
      },
      menuText: {
        paddingLeft: 10,
      },
      submenu: { fontSize: 16, color: Colors.dark, margin: " 2.5px 20px" },
    };
    return (
      <nav style={styles.sidebar}>
        <div style={styles.avatar}>
          <img
            style={styles.avatarImage}
            src="https://www.aceshowbiz.com/images/photo/jimi_hendrix.jpg"
            alt=""
          />
          <div style={styles.avatarLabel}> 12 </div>
        </div>
        <div style={styles.username}>{user.email || "Jimi Hendrix"}</div>
        <div style={styles.type}>
          {isMana ? "Manager" : isTrans ? "Transporter" : "Artist"}
        </div>

        <Link className="sidebarMenu" style={styles.menu} to="/dashboard">
          <Folder size={16} color={Colors.grey} />
          <span style={styles.menuText}>Dashboard</span>
        </Link>
        <a
          href="/home"
          className="sidebarMenu"
          style={styles.menu}
          onClick={() => fireApp.auth().signOut()}
        >
          <Folder size={16} color={Colors.grey} />
          <span style={styles.menuText}>Logout</span>
        </a>

        <div style={styles.menu}> Transporters </div>
        {isMana ? (
          <NavLink style={styles.submenu} to="/transporters/explore">
            Explore
          </NavLink>
        ) : null}
        <NavLink style={styles.menu} to="/contracts">
          Contracts
        </NavLink>
        <NavLink style={styles.submenu} to="/dashboard">
          add new contract
        </NavLink>
        <NavLink style={styles.submenu} to="/dashboard">
          my contracts
        </NavLink>
        <NavLink style={styles.menu} to="/orders">
          Orders
        </NavLink>
        <NavLink style={styles.menu} to="/customers">
          Customers
        </NavLink>
      </nav>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.auth.user,
});
export default connect(mapStateToProps)(Sidebar);
