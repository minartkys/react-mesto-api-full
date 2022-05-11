import React from "react";
import PopupWithForm from "./PopupWithForm.js";

export default function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      name={"avatar"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      title={"Обновить аватар"}
      formName={"avatar-form"}
      buttonText={"Сохранить"}
    >
      <input
        ref={avatarRef}
        id="avatarUrl"
        name="avatar"
        className="popup__input popup__input_avatar"
        placeholder="Ссылка на картинку"
        type="url"
        required
      />
      <span id="avatarUrl-error" className="popup__error"></span>
    </PopupWithForm>
  );
}
