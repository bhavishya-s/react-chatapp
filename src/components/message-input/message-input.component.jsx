import React from "react";

export default class MessageInput extends React.Component {
  render() {
    return (
      <div className="message-input-container">
        <input type="text" placeholder="Enter message" />
      </div>
    );
  }
}
