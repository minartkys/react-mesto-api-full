import React from "react";
export default function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.handleLogin(password, email);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="login-form__title">Вход</h2>
      <input
        className="login-form__email"
        type="email"
        placeholder="Email"
        value={email || ""}
        onChange={handleEmailChange}
        required
      />
      <input
        className="login-form__password"
        type="password"
        placeholder="Пароль"
        value={password || ""}
        onChange={handlePasswordChange}
        required
      />
      <button className="login-form__button">Войти</button>
    </form>
  );
}
