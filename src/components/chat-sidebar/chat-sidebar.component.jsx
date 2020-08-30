import React, { Component } from "react";

import "./chat-sidebar.styles.scss";

import FriendSidebar from "../friends-sidebar/friends-sidebar.component.jsx";
import Img from "../../temp/user.svg";

export default class ChatSidebar extends Component {
  state = {
    friends: [
      { imgURL: Img, name: "Anmol" },
      { imgURL: Img, name: "Bhavishya" },
      { imgURL: Img, name: "Ashish" },
      { imgURL: Img, name: "Chitron" },
    ],
  };
  render() {
    return (
      <div className="chat-sidebar">
        {this.state.friends.map((itm, idx) => (
          <FriendSidebar imgURL={itm.imgURL} name={itm.name} key={idx} />
        ))}
      </div>
    );
  }
}
