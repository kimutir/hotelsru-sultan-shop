import styles from "./cart-modal.module.css";
import React from "react";

interface PropsType {
  closeModal: (value: boolean) => void;
}

const CartModal: React.FC<PropsType> = ({ closeModal }) => {
  const contentRef = React.useRef<HTMLDivElement>();

  const onCloseModal = (e: React.MouseEvent) => {
    if (e.target !== contentRef.current) {
      closeModal(false);
    }
  };
  const crossClick = () => {
    closeModal(false);
  };

  return (
    <div className={styles.modal} onClick={onCloseModal}>
      {open && (
        <div ref={contentRef} className={styles["modal-content"]}>
          <span className={styles.cross} onClick={crossClick} />
          <p>Спасибо за заказ!</p>
        </div>
      )}
    </div>
  );
};

export default CartModal;
