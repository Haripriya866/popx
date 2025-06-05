import { Component } from "react";

import {Container,Title,Subtitle,LandingContainer,Button} from './styledComponents.jsx'

class Landing extends Component {
  goToCreateAccount = () => {
    const { history } = this.props;
    history.push("/create-account");
  };

  goToLogin = () => {
    const { history } = this.props;
    history.push("/login");
  };

  render() {
    return (
      <Container>
            <Title>Welcome to PopX</Title>
            <Subtitle>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit,</Subtitle>
            <LandingContainer>
                <Button $primary onClick={this.goToCreateAccount}>Create Account</Button>
                <Button onClick={this.goToLogin}>Already Registered? Login</Button>
            </LandingContainer>
      </Container>
    );
  }
}

export default Landing;
