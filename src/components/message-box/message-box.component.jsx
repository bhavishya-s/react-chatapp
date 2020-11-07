import React from "react";

import "./message-box.styles.scss";
import Send from "../../temp/paper-plane.svg";

export default class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      sendMessage: this.props.sendMessage,
    };
  }

  handleClick = () => {
    const { value } = this.state;
    if (value) {
      this.state.sendMessage(value);
      this.setState({ value: "" });
    }
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ value });
  };

  handleReturn = (e) => {
    if (e.key === "Enter") this.handleClick();
  };

  render(props) {
    return (
      <div className="message-input-box">
        <input
          type="text"
          value={this.state.value}
          placeholder="Enter message"
          onChange={this.handleChange}
          onKeyDown={this.handleReturn}
        />
      </div>
    );
  }
}
