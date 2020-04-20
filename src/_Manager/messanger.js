import React, { Component } from "react";
import "./chat.css";
export default class Messanger extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="chat">
        <div className="chatLeft">
          <ChatPerson />
          <ChatPerson />
          <ChatPerson selected />
          <ChatPerson />
          <ChatPerson />
          <ChatPerson />
          <ChatPerson />
        </div>
        <div className="chatRight">right</div>
      </div>
    );
  }
}

const ChatPerson = (props) => (
  <div
    style={{
      background: props.selected ? "white" : null,
      height: 100,
      borderBottom: "1px solid red",
      display: "flex",
      alignItems: "center",
    }}
  >
    <div
      style={{
        background: "#394748",
        height: 70,
        width: 70,
        borderRadius: 100,
        margin: "0 10px",
      }}
    ></div>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span style={{ fontWeight: "600", marginBottom: 5 }}> Naoufal Badou</span>
      <span style={{ fontSize: 14 }}> last chatted : 20 days ago</span>
    </div>
  </div>
);
