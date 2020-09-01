import React from "react";
import "./chatpage.styles.scss";
import Img from "../../temp/user.svg";

import ChatSidebar from "../../components/chat-sidebar/chat-sidebar.component.jsx";
import ChatHeader from "../../components/chat-header/chat-header.component.jsx";
import Message from "../../components/message/message.component.jsx";
import MessageBox from "../../components/message-box/message-box.component.jsx";

import { auth } from "../../firebase/firebase.utils";

export default class ChatPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: props.currentUser,
      messages: [],
    };
  }

  componentDidMount() {
    this.clearanceColor();
  }

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
    this.setState({
      messages: [
        ...this.state.messages,
        {
          author: "self",
          name: this.state.currentUser.displayName,
          messageBody,
          timeStamp: new Date(),
        },
      ],
    });
  };

  logoutUser() {
    auth.signOut();
  }

  render() {
    const { messages, currentUser } = this.state;
    return (
      <>
        <div className="chat-page">
          <ChatHeader
            img={currentUser.photoURL}
            selfName={currentUser.displayName}
            logout={this.logoutUser}
          />
          <div className="chat-body">
            <ChatSidebar />
            <div className="chat-side-container">
              <div className="chat-side-header">
                <div className="friend-avatar">
                  <img className="avatar" src={Img} alt={"avatar"} />
                </div>
                <span className="other-name">Placeholder</span>
              </div>
              <div className="chat-side">
                <div className="clear-header"></div>
                <div className="messages-container">
                  <div className="messages">
                    {messages.map((itm, idx) => (
                      <Message
                        author={itm.author}
                        name={itm.name}
                        messageBody={itm.messageBody}
                        timeStamp={itm.timeStamp}
                        key={idx}
                      />
                    ))}
                    <div className="messages-clearance" />
                  </div>
                </div>
                <MessageBox
                  className="msg-box"
                  sendMessage={(value) => this.sendNewMessage(value)}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
