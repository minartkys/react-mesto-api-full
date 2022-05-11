import React from "react";
import { Link } from "react-router-dom";
export default function Register(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleRegNewUser(password, email);
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="login-form__title">Регистрация</h2>
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
      <button className="login-form__button">Зарегистрироваться</button>
      <div className="login-form__text">
        Уже зарегистрированы?&ensp;
        <Link to="/sign-in" className="login-form__link">
          Войти
        </Link>
      </div>
    </form>
  );
}
