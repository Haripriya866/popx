import React, { Component } from "react";

import {
    LoginContainer,
    LoginHeading,
    LoginDescription,
    LoginWrapper,
    LoginLabel,
    LoginInput,
    LoginButton
} from './styledComponents.jsx'

class Login extends Component {
    state={
        email: "",
        password: ""
    }

    onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleLoginClick = () => {
    const { history } = this.props;
    history.push("/account-settings");
  };

  render() {
    const {email,password}=this.state
    return (
      <LoginContainer>
        <LoginHeading>Signin to your PopX account</LoginHeading>
        <LoginDescription>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit,</LoginDescription>
        <LoginWrapper>
            <LoginLabel>Email Address</LoginLabel>
            <LoginInput 
            type="email" 
            placeholder="Enter email address"
            value={email}
            onChange={this.onChangeEmail}
            />
            <LoginLabel>Password</LoginLabel>
            <LoginInput 
            type="password" 
            placeholder="Enter password"
            value={password}
            onChange={this.onChangePassword}
            />
            <LoginButton onClick={this.handleLoginClick}>Login</LoginButton>   
        </LoginWrapper>
        
      </LoginContainer>
    );
  }
}

export default Login;  