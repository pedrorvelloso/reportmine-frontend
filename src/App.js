import React, { Component } from "react";
import {
  Container,
  LoginContainer,
  Cover,
  Login,
  Brand,
  Form,
  FormTitle,
  Input,
  Button
} from "./components/Login";
import Background from "./assets/images/background.jpg";
import SiteBg from "./assets/images/sitebg.png";

class App extends Component {
  render() {
    return (
      <div className="limiter">
        <Container background={SiteBg}>
          <LoginContainer>
            <Cover background={Background} />
            <Login>
              <Brand>Reportmine © 2019</Brand>
              <Form onSubmit={e => e.preventDefault()}>
                  <FormTitle>Entrar</FormTitle>
                  <Input placeholder="Usuário" required/>
                  <Input placeholder="Senha" required type="password"/>
                  <Button onSubmit={e => e.preventDefault}>Entrar</Button>
              </Form>
            </Login>
          </LoginContainer>
        </Container>
      </div>
    );
  }
}

export default App;
