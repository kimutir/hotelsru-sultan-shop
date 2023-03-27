import React from "react";
import styles from "./custom-button.module.css";

interface PropsType {
  text?: string;
  icon?: string;
  isCircle?: boolean;
  onClick?: () => void;
}

const CustomButton: React.FC<PropsType> = ({ text, icon, onClick }) => {
  return (
    <button onClick={onClick} className={!text ? styles["button-round"] : styles.button}>
      <div className={styles["button-content"]}>
        {text && text}
        {icon && <img className={styles["button-icon"]} src={icon} />}
      </div>
    </button>
  );
};

export default CustomButton;
