import React from "react";

import "./chat-header.styles.scss";

import Img from "../../temp/user.svg";
import CustomButton from "../custom-button/custom-button.component.jsx";

export default function ChatHeader({ selfName }) {
  return (
    <div className="chat-header">
      <div className="content-left">
        <img className="self-img" src={Img} alt={`${selfName}`} />
        <span className="self-name">{selfName}</span>
      </div>
      <div className="content-right">
        <div className="button-container">
          <CustomButton>LOGOUT</CustomButton>
        </div>
      </div>
    </div>
  );
}
