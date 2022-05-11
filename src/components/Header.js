import logo from "../images/Logo.svg";
import { Link, Route, Switch } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      <Switch>
        <Route path="/sign-up">
          <Link className="header__info" to="/sign-in">
            Войти
          </Link>
        </Route>
        <Route path="/sign-in">
          <Link className="header__info" to="/sign-up">
            Регистрация
          </Link>
        </Route>
        <Route path="/main">
          <div className="header__toolBar">
            <h2 className="header__email">{props.email}</h2>
            <Link
              className="header__info"
              to="/sign-in"
              onClick={props.logoutProfile}
            >
              Выйти
            </Link>
          </div>
        </Route>
      </Switch>
    </header>
  );
}
