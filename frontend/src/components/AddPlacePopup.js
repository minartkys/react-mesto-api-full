import React from "react";
import PopupWithForm from "./PopupWithForm.js";

export default function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleCardNameChange(e) {
    setName(e.target.value);
  }

  function handleCardLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddCard({
      name,
      link,
    });
  }
  React.useEffect(() => {
    setName("");
    setLink("");
  }, [props.isOpen]);

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      name={"card"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      title={"Новое место"}
      formName={"card-form"}
      buttonText={"Создать"}
    >
      <input
        value={name}
        onChange={handleCardNameChange}
        id="card-name"
        name="name"
        className="popup__input popup__input_card-name"
        minLength="2"
        maxLength="30"
        placeholder="Название"
        type="text"
        required
      />
      <span id="card-name-error" className="popup__error"></span>
      <input
        onChange={handleCardLinkChange}
        value={link}
        id="cardUrl"
        name="link"
        className="popup__input popup__input_card-url"
        placeholder="Ссылка на картинку"
        type="url"
        required
      />
      <span id="cardUrl-error" className="popup__error"></span>
    </PopupWithForm>
  );
}
