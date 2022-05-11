export default function PopupWithForm(props) {
  return (
    <section
      className={`popup popup_type_${props.name} ${
        props.isOpen && "popup_opened"
      }`}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__button-close"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form
          className="popup__form"
          name={props.formName}
          onSubmit={props.onSubmit}
        >
          {props.children}
          <button type="submit" className="popup__button-save">
            {props.buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
