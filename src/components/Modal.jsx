import "../css/Modal.css"
import {GrClose} from "react-icons/gr"

const Modal = ({children, isOpen, closeModal}) => {
  const handleModalContainerClick = e  => e.stopPropagation();
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className="modal-card" onClick={handleModalContainerClick}>
            <button className="modal-close" onClick={closeModal}><GrClose/></button>
            {children}
        </div>
    </article>
  )
}

export default Modal