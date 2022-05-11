export default function ImagePopup(props) {
  return (
    <section
      className={`popup popup_type_photo ${props.isOpen && "popup_opened"}`}
    >
      <div className="popup__photo-container">
        <button
          type="button"
          className="popup__button-close"
          onClick={props.onClose}
        ></button>
        <img className="popup__image" src={props.link} alt={props.name} />
        <h2 className="popup__photo-name">{props.Name}</h2>
      </div>
    </section>
  );
}
