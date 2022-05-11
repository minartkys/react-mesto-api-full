import React from "react";
import BadTry from "../images/BadTry.svg";
import GoodTry from "../images/GoodTry.svg";

function InfoTooltip(props) {
  return (
    <section className={`popup ${props.isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__button-close"
          onClick={props.onClose}
        ></button>
        <img
          className="infoTooltip__image"
          src={props.RegStatus ? GoodTry : BadTry}
        />
        <p className="infoTooltip__title">
          {props.RegStatus
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </p>
      </div>
    </section>
  );
}
export default InfoTooltip;
