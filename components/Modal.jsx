import "./Modal.css";

function Modal({ question, cancelModal, confirmModal }) {
  return (
    <>
      <div className="modal">
        <p className="modal__title">{question}</p>
        <div className="modal__buttons">
          <button
            onClick={cancelModal}
            className="btn btn__cancel"
          >
            Cancel
          </button>
          <button onClick={confirmModal} className="btn">
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;
