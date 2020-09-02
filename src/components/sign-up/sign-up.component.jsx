import React from "react";

import "./sign-up.styles.scss";

import FormInput from "../form-input/formInput.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <div className="heading">SIGN UP</div>
        <form method="GET" onClick={this.handleSubmit}>
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
          <FormInput
            name="email"
            type="email"
            label="EMAIL"
            value={this.state.email}
            handleChange={this.handleChange}
          />
          <div className="button-container">
            <CustomButton type="submit">SIGN UP</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
