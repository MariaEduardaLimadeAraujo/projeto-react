import React, { useState } from "react";
import "./Login.css";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [senha, setSenha] = useState("");

  function mostrarMensagem() {
    alert("O nome do usuário e/ou senha está inválido.");
  }

  return (
    <div>
      <form className="form">
        <div className="usuario">
          <input
            type="texto"
            name="username"
            placeholder="Nome do usuário"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="senha">
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <button className="botao" onClick={() => mostrarMensagem()}>
          LOGIN
        </button>
        <p className="esqueceu">
          Esqueceu sua senha?{" "}
          <a target="_blank" href="http://google.com">
            Clique Aqui
          </a>
        </p>
        <p id="props">
          {userName} - {senha}
          <br />
          {props.felicidade} {props.mensagem}
        </p>
      </form>
    </div>
  );
};

export default Login;
