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

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const body = {
      user: user.value,
      password: password.value
    };

    const requestInfo = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    };
    // test login with local api
    fetch("http://localhost:4000/login/test", requestInfo)
      .then(response => {
        if (response.ok) return response.json();
        if (response.status === 401)
          throw new Error("Usuário ou Senha inválidos!");
        else throw new Error(response.status);
      })
      .then(data => setLoading(false))
      .catch(e => {
        setLoading(false)
        setError(e.message)
      });
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
