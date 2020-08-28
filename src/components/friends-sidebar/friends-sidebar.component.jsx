import React from "react";

import "./friends-sidebar.styles.scss";

const FriendSidebar = ({ name, imgURL }) => {
  console.log(imgURL);
  return (
    <div className="friend-container">
      <div className="friend-avatar">
        <img className="avatar" src={imgURL} alt={`${name}-avatar`} />
      </div>
      {name ? <span className="friend-name">{name}</span> : "Friend"}
    </div>
  );
};

export default FriendSidebar;
