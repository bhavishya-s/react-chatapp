import React from "react";
import "./chatpage.styles.scss";
import ChatSidebar from "../../components/chat-sidebar/chat-sidebar.component.jsx";
import ChatHeader from "../../components/chat-header/chat-header.component.jsx";
import MessageBox from "../../components/message-box/message-box.component.jsx";

export default class ChatPage extends React.Component {
  render() {
    return (
      <>
        <div className="chat-page">
          <ChatHeader selfName="Placeholder" />
          <div className="chat-body">
            <ChatSidebar />
            <div className="chat-side">
              <div className="messages" />
              <MessageBox />
            </div>
          </div>
        </div>
      </>
    );
  }
}
