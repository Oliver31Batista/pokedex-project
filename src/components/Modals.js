import React from 'react';
import { useModal } from '../hooks/useModal';
import Modal from './Modal';

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);

  return (
    <div>  
        <h2>Modales</h2>
        <button onClick={openModal1}>Modal 1</button>
        
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
            <h3>Modal 1</h3>
            <p>Hola, este es el contenido de mi modal 1</p>
            <img src="https:placeimg.com/400/410/animals" alt='modal'/>
        </Modal>
        <button onClick={openModal2}>Modal 2</button>
        <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
            <h3>Modal 2</h3>
            <p>ipsum dolor</p>
            <img src="https:placeimg.com/450/410/animals" alt='modal'/>
        </Modal>
    </div>
  )
}

export default Modals

