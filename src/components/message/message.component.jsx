import React, { Component } from "react";

import "./message.styles.scss";

export default class Messages extends Component {
  render(props) {
    const { author, name, messageBody, timeStamp } = this.props;
    return (
      <div className={`${author} message-container`}>
        <div className="message-body-container">
          <h3 className="message-author">
            {name}
            <span className="timestamp">{timeStamp.toDateString()}</span>
          </h3>
          <p className="message-body">{messageBody}</p>
        </div>
      </div>
    );
  }
}
