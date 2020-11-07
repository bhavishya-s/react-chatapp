import React, { Component } from "react";

import "./message.styles.scss";

export default class Messages extends Component {
  render(props) {
    const { color, name, messageBody, timeStamp } = this.props;
    const style = {
      color: color,
    };
    return (
      <div className={` message-container`}>
        <div className="message-body-container">
          <h3 className="message-author" style={style}>
            {name}
            <span className="timestamp">{timeStamp}</span>
          </h3>
          <p className="message-body">{messageBody}</p>
        </div>
      </div>
    );
  }
}
