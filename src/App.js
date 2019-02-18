import React, { useState } from "react";
import classNames from "classnames";
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
import Icon from "./components/Icon";
import login from './api/login'

const useInputForm = initialState => {
  const [value, setValue] = useState(initialState);

  const handleChange = e => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange
  };
};

const App = () => {
  const user = useInputForm("");
  const password = useInputForm("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const buttonClass = classNames({
    error: error
  });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { token, error } = await login(user.value, password.value);
    setLoading(false)
    if(error) setError(error)
    else console.log(token)
  };

  return (
    <div className="limiter">
      <Container background={SiteBg}>
        <LoginContainer>
          <Cover background={Background} />
          <Login>
            <Brand>Reportmine © 2019</Brand>
            <Form onSubmit={handleSubmit}>
              <FormTitle>Entrar</FormTitle>
              <Input placeholder="Usuário" required {...user} />
              <Input
                placeholder="Senha"
                required
                type="password"
                {...password}
              />
              <Button className={buttonClass} disabled={loading}>
                {error ? (
                  <>
                    {error}
                    <span>
                      <Icon name="times" />
                    </span>
                  </>
                ) : (
                    "Entrar"
                  )}
                {loading ? <span className="loader" /> : ""}
              </Button>
            </Form>
          </Login>
        </LoginContainer>
      </Container>
    </div>
  );
};

export default App;
