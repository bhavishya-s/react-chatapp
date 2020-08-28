import React from "react";

import "./homepage.styles.scss";

import SignIn from "../../components/sign-in/sign-in.component.jsx";
import SignUp from "../../components/sign-up/sign-up.component.jsx";

export default class HomePage extends React.Component {
  render() {
    return (
      <>
        <div className="home-page-container">
          <div className="home-page">
            <SignIn />
            <div className="bar" />
            <SignUp />
          </div>
        </div>
      </>
    );
  }
}
