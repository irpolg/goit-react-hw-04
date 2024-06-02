// import style from './GridItem.module.css';

// export const GridItem = ({ children }) => {
//   return <li className={style.item}>{children}</li>;
// };

import Modal from 'react-modal';
import css from './ImageModal.module.css';

export default function ImageModal({isOpen, onClose, url, description}) {
    return (
            <Modal
                className={css.modal}
            // isOpen={modalIsOpen}
                isOpen={isOpen}
                // onAfterOpen={afterOpenModal}
            // onRequestClose={closeModal}
                onRequestClose={onClose}
                // style={customStyles}
                // contentLabel="Example Modal"
            >
                <img className={css.img} src={url} alt={description} />          
            </Modal>
  );
}