import React, { Component } from "react";
import { CiCamera } from "react-icons/ci";

import {
    AccountsSettingsContainer,
    NavHeader,
    ProfileContainer,
    ProfileImageContainer,
    CameraContainer,
    TextContent,
    Name,
    Gmail,
    ProfileDescription,
    HorizontalLine
} from './styledComponents.jsx'

class AccountSettings extends Component {
  render() {
    return (
      <>
      <AccountsSettingsContainer>
        <NavHeader>
            Account Settings
        </NavHeader>
        <ProfileContainer>
            <ProfileImageContainer>
                <CameraContainer>
                    <CiCamera  color="white" size="16px" />
                </CameraContainer>
            </ProfileImageContainer>
            <TextContent>
                <Name>Marry Doe</Name>
                <Gmail>Marry@Gmail.Com</Gmail>
            </TextContent>
        </ProfileContainer>
        <ProfileDescription>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
    Labore Et Dolore Magna Aliquyam Erat, Sed Diam</ProfileDescription>
        <HorizontalLine />
        <br/><br/><br/><br/>
        <br/><br/><br/><br/>
        <br/><br/><br/><br/>
        <br/>
        <HorizontalLine />
      </AccountsSettingsContainer> 
      </>
    );
  }
}

export default AccountSettings;
