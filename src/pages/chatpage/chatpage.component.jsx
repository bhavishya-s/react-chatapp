import React from "react";
import "./chatpage.styles.scss";

import ChatSidebar from "../../components/chat-sidebar/chat-sidebar.component.jsx";
import ChatHeader from "../../components/chat-header/chat-header.component.jsx";
import Message from "../../components/message/message.component.jsx";
import MessageBox from "../../components/message-box/message-box.component.jsx";

export default class ChatPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          author: "self",
          name: "Anmol",
          messageBody: "I have been kidnapped!",
          timeStamp: new Date(),
        },
        {
          author: "other",
          name: "Bhavishya",
          messageBody: "What? Seriously?",
          timeStamp: new Date(),
        },
        {
          author: "self",
          name: "Anmol",
          messageBody: "Yes, sending location",
          timeStamp: new Date(),
        },

        {
          author: "other",
          name: "Bhavishya",
          messageBody: "Actually.. Look at your right, I also got kidnapped...",
          timeStamp: new Date(),
        },
        {
          author: "self",
          name: "Anmol",
          messageBody: "I have been kidnapped!",
          timeStamp: new Date(),
        },
        {
          author: "other",
          name: "Bhavishya",
          messageBody: "What? Seriously?",
          timeStamp: new Date(),
        },
        {
          author: "self",
          name: "Anmol",
          messageBody: "Yes, sending location",
          timeStamp: new Date(),
        },
        {
          author: "other",
          name: "Bhavishya",
          messageBody: "Actually.. Look at your right, I also got kidnapped...",
          timeStamp: new Date(),
        },
        {
          author: "self",
          name: "Anmol",
          messageBody: "I have been kidnapped!",
          timeStamp: new Date(),
        },
        {
          author: "other",
          name: "Bhavishya",
          messageBody: "What? Seriously?",
          timeStamp: new Date(),
        },
        {
          author: "self",
          name: "Anmol",
          messageBody: "Yes, sending location",
          timeStamp: new Date(),
        },
        {
          author: "other",
          name: "Bhavishya",
          messageBody: "Actually.. Look at your right, I also got kidnapped...",
          timeStamp: new Date(),
        },
      ],
    };
  }
  componentDidMount() {
    this.clearanceColor();
  }

  clearanceColor = () => {
    const { messages } = this.state;
    var div = document.getElementsByClassName("messages-clearance")[0];

    if (messages[messages.length - 1].author === "self")
      div.style.background = "#475469";
    else div.style.background = "#333c4c";
  };

  sendNewMessage = (messageBody) => {
    this.setState({
      messages: [
        ...this.state.messages,
        { author: "self", name: "Anmol", messageBody, timeStamp: new Date() },
      ],
    });
  };

  render() {
    const { messages } = this.state;
    return (
      <>
        <div className="chat-page">
          <ChatHeader selfName="Placeholder" />
          <div className="chat-body">
            <ChatSidebar />
            <div className="chat-side-container">
              <div className="chat-side">
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
