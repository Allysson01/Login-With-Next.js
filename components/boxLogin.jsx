import React, { useState } from "react";
import Grid from "../components/grid.jsx";
import logo from "../images/user.png";
import lock from "../images/lock.png";


const BoxLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function emailChange(e) {
    setEmail({ name: e.target.value });
  }

  function passwordChange(e) {
    setPassword({ name: e.target.value });
  }

  const keyHandler = (e) => {
    if (e.keyCode === 13) {
      return Login(e);
    }
  };

  const Login = (e) => {
    e.preventDefault();

    if (!email.name && !password.name) {
      const small = document.querySelectorAll("small");
      small.forEach((small) => {
        small.hidden = false;
      });
    } else {
      alert(`E-mail: ${email.name}
        Senha: ${password.name}`);
    }
  };

  //Redirecioar ao apertar F12
  React.useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key == "F12") {
        window.location.href = "http://www.google.com.br";
      }
    });
  }, []);

  return (
    <>
      <div className="boxLogin">       
        <form onSubmit={Login}>
          <Grid cols="12">
            <div className="form-group lgoImg">
              <img alt="logo" src={logo} className="imgLogin" />
            </div>
          </Grid>

          <Grid cols="12">
            <div className="form-group">
              <div className="col-sm-12">
                <label htmlFor="inpEmail" className="inpLabel">
                  E-mail:
                </label>
              </div>
              <div className="col-sm-12">
                <input
                  type="text"
                  id="inpEmail"
                  className="form-control"
                  placeholder="E-mail"
                  onChange={emailChange}
                  value={email.name || ""}
                  onKeyUp={keyHandler}
                />
                <small name="required" hidden>
                  Campo obrigatório
                </small>
              </div>
            </div>
          </Grid>

          <Grid cols="12">
            <div className="form-group">
              <div className="col-sm-12">
                <label htmlFor="passwordId" className="inpLabel">
                  Senha:
                </label>
              </div>
              <div className="col-sm-12">
                <input
                  type="password"
                  id="passwordId"
                  className="form-control"
                  placeholder="password"
                  onChange={passwordChange}
                  value={password.name || ""}
                  onKeyUp={keyHandler}
                />
                <small name="required" hidden>
                  Campo obrigatório
                </small>
              </div>
            </div>
          </Grid>

          <Grid cols="12">
            <div className="form-group">
              <div className="col-sm-12">
                <div>
                  <small id="errorLogin" hidden>
                    Usuário ou Senha inválido
                  </small>
                </div>
              </div>
            </div>
          </Grid>

          <Grid cols="12">
            <div className="form-group">
              <div className="col-sm-12">
                <div>
                  <button className="btn btn-primary btn-lg btn-block">
                    Login <img alt="logo" src={lock} className="imgLock" />
                  </button>
                </div>
              </div>
            </div>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default BoxLogin;
