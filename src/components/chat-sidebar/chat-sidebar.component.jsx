import React, { Component } from "react";

import "./chat-sidebar.styles.scss";

import FriendSidebar from "../friends-sidebar/friends-sidebar.component.jsx";
import Img from "../../temp/user.svg";
import { firestore } from "../../firebase/firebase.utils";

export default class ChatSidebar extends Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.getPeople();
  }
  getPeople = async () => {
    const friendRef = await firestore.collection("users");
    const snapshot = await friendRef.orderBy("displayName").limit(10).get();
    let friends = [];
    snapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let f = doc.data();
      friends = [
        ...friends,
        {
          imgURL: f.photoURL ? f.photoURL : Img,
          ...f,
        },
      ];
    });
    console.log("...");
    this.setState({ friends });
  };

  render() {
    console.log(this.state.friends);
    return (
      <div className="chat-sidebar">
        {this.state.friends.map((itm, idx) => (
          <FriendSidebar
            imgURL={itm.imgURL}
            name={itm.displayName}
            key={itm.uid}
          />
        ))}
      </div>
    );
  }
}
