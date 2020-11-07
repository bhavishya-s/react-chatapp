import React from "react";

import "./chatpage.styles.scss";

import ChatHeader from "../../components/chat-header/chat-header.component.jsx";
import Message from "../../components/message/message.component.jsx";
import MessageBox from "../../components/message-box/message-box.component.jsx";

import {
  firestore,
  auth,
  storeMessage,
} from "../../firebase/firebase.utils.js";

class ChatPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: 0,
      currentUser: props.currentUser,
      messages: [],
    };
  }
  unsubscribeFromAuth = null;
  unsubscribeFromMessages = null;
  latest = React.createRef();
  componentDidMount = async (props) => {
    const messagesRef = await firestore
      .collection("messages")
      .orderBy("timeStamp");
    this.unsubscribeFromMessages = await messagesRef.onSnapshot(
      async (snapshot) => {
        var messages = [];
        snapshot.forEach((doc) => messages.push(doc.data()));
        this.setState({ messages: messages });
      }
    );
    this.clearanceColor();
  };
  componentDidUpdate = () => {
    this.latest.current.scrollIntoView({ block: "end" });
  };
  clearanceColor = () => {
    const { messages } = this.state;
    var div = document.getElementsByClassName("messages-clearance")[0];

    if (messages.length !== 0) {
      div.style.display = "block";
      if (messages[messages.length - 1].author === "self")
        div.style.background = "#475469";
      else div.style.background = "#333c4c";
    }
  };

  sendNewMessage = (messageBody) => {
    storeMessage({
      name: this.state.currentUser.displayName,
      messageBody,
      timeStamp: new Date(),
      color: this.state.currentUser.color,
    });
    this.setState({ idx: this.state.idx + 1 });
  };

  logoutUser() {
    auth.signOut();
  }

  render() {
    const messages = this.state.messages;
    return (
      <>
        <div className="chat-page">
          <ChatHeader
            image={this.state.currentUser.image}
            selfName={this.state.currentUser.displayName}
            logout={this.logoutUser}
          />
          <div className="chat-body">
            <div className="messages-container">
              <div className="messages">
                {messages.map((itm, idx) => {
                  return (
                    <Message
                      color={itm.color}
                      name={itm.name}
                      messageBody={itm.messageBody}
                      key={idx}
                    />
                  );
                })}
              </div>
              <div className="lil-clearance" ref={this.latest} />
            </div>
          </div>
          <div className="footer" />
          <MessageBox
            className="msg-box"
            sendMessage={(value) => this.sendNewMessage(value)}
          />
        </div>
      </>
    );
  }
}

export default ChatPage;
