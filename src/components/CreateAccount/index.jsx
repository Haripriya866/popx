import React, { Component } from "react";

import {
    CreateAccountContainer,
    CreateAccountHeading,
    CreateAccountLabel,
    CreateAccountInput,
    AgencyHeading,
    RadioWrapperContainer,
    RadioInputContainer,
    AgencyInput,
    AgencyLabel,
    CreateAccountButtonContainer,
    CreateAccountButton

} from './styledComponents.jsx'

class CreateAccount extends Component {
    state={
        fullName: "",
        phoneNumber: "",
        email: "",
        password: "",
        companyName: "",
        isAgency:"Yes"
    }

    onChangeFullName = (event) => {
    this.setState({ fullName: event.target.value });
  };

  onChangePhoneNumber = (event) => {
    this.setState({ phoneNumber: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onChangeCompanyName = (event) => {
    this.setState({ companyName: event.target.value });
  };

    onChangeAgency=(event)=>{
        this.setState({isAgency:event.target.value})
    }

  handleCreateAccountClick = () => {
    const { history } = this.props;
    history.push("/account-settings");
  };

  render() {
    const {fullName,phoneNumber,email,password,companyName,isAgency}=this.state;

    return (
      <>
      <CreateAccountContainer>
        <CreateAccountHeading>Create your PopX account</CreateAccountHeading>
            <CreateAccountLabel>Full Name</CreateAccountLabel>
            <CreateAccountInput 
            type="text"
            placeholder="Marry Doe"
            value={fullName}
            onChange={this.onChangeFullName}
             />
            <CreateAccountLabel>Phone number</CreateAccountLabel>
            <CreateAccountInput 
            type="text" 
            placeholder="Marry Doe"
            value={phoneNumber}
            onChange={this.onChangePhoneNumber}  />
            <CreateAccountLabel>Email address</CreateAccountLabel>
            <CreateAccountInput 
            type="email" 
            placeholder="Marry Doe"
            value={email}
            onChange={this.onChangeEmail} />
            <CreateAccountLabel>Password</CreateAccountLabel>
            <CreateAccountInput 
            type="password" 
            placeholder="Marry Doe"
            value={password}
            onChange={this.onChangePassword} />
            <CreateAccountLabel>Company name</CreateAccountLabel>
            <CreateAccountInput 
            type="text" 
            placeholder="Marry Doe"
            value={companyName}
            onChange={this.onChangeCompanyName}  />
            <AgencyHeading>Are you an Agency?</AgencyHeading>
            <RadioWrapperContainer>
                <RadioInputContainer>
                    <AgencyInput 
                    type='radio' name='agency' id="agencyYes" value="Yes" 
                    onChange={this.onChangeAgency} 
                    checked={isAgency==="Yes"}
                     />
                    <AgencyLabel for='agencyYes'>Yes</AgencyLabel>
                </RadioInputContainer>
                <RadioInputContainer>
                    <AgencyInput 
                    type='radio' name='agency' id="agencyNo" value="No"
                    onChange={this.onChangeHandler} 
                    checked={isAgency==="No"}
                    />
                    <AgencyLabel for='agencyNo'>No</AgencyLabel>
                </RadioInputContainer>
            </RadioWrapperContainer>
            <CreateAccountButtonContainer>
                <CreateAccountButton onClick={this.handleCreateAccountClick}>Create Account</CreateAccountButton>
            </CreateAccountButtonContainer>          
      </CreateAccountContainer>
      </>
    );
  }
}

export default CreateAccount;
