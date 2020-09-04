import React from "react";

import "./sign-up.styles.scss";

import FormInput from "../form-input/formInput.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";

import { auth, storeUser } from "../../firebase/firebase.utils";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      password: "",
      email: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, displayName } = this.state;

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await storeUser(user, { displayName });

      this.setState({
        email: "",
        password: "",
        username: "",
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <div className="heading">SIGN UP</div>
        <form method="GET">
          <FormInput
            name="displayName"
            type="text"
            label="DISPLAY NAME"
            value={this.state.displayName}
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
            <CustomButton type="submit" onClick={this.handleSubmit}>
              SIGN UP
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
