import "../css/Modal.css"

const Modal = ({children, isOpen, closeModal}) => {
  return (
    <article className={`modal ${isOpen && "is-open"}`}>
        <div className="modal-container">
            <button className="modal-close">X</button>
            {children}
        </div>
    </article>
  )
}

export default Modal