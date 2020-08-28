import React from "react";

import "./sign-in.styles.scss";

import FormInput from "../form-input/formInput.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <div className="heading">SIGN IN</div>
        <form method="GET">
          <FormInput
            name="username"
            type="text"
            label="USERNAME"
            value={this.state.username}
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            type="password"
            label="PASSWORD"
            value={this.state.password}
            handleChange={this.handleChange}
          />
          <div className="button-container">
            <CustomButton type="submit">SIGN IN</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
