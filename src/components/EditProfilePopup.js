import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

export default function EditProfilePopup(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }
  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      name={"edit"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      title={"Редактировать профиль"}
      formName={"edit-form"}
      buttonText={"Сохранить"}
    >
      <input
        onChange={handleNameChange}
        value={name || ""}
        name="name"
        id="name"
        className="popup__input popup__input_type_edit-name"
        minLength="2"
        maxLength="40"
        placeholder="Имя"
        type="text"
        required
      />
      <span id="name-error" className="popup__error"></span>
      <input
        onChange={handleDescriptionChange}
        value={description || ""}
        id="about"
        name="about"
        className="popup__input popup__input_edit-profession"
        minLength="2"
        maxLength="200"
        placeholder="Профессия"
        type="text"
        required
      />
      <span id="about-error" className="popup__error"></span>
    </PopupWithForm>
  );
}
