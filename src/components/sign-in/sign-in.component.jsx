import React from "react";

import "./sign-in.styles.scss";

import FormInput from "../form-input/formInput.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils.js";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    return (
      <div className="sign-in">
        <div className="heading">SIGN IN</div>
        <div className="google-button">
          <CustomButton onClick={signInWithGoogle}>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
        <div className="small heading">-OR-</div>
        <form method="GET" onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="EMAIL"
            value={this.state.email}
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

export default SignIn;
