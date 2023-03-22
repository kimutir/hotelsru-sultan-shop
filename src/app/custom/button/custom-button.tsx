import React from "react";
import styles from "./custom-button.module.css";

interface PropsType {
  text: string;
  icon: string;
}

const CustomButton: React.FC<PropsType> = ({ text, icon }) => {
  return (
    <button className={styles.button}>
      <div className={styles["button-content"]}>
        {text}
        <img className={styles["button-icon"]} src={icon} />
      </div>
    </button>
  );
};

export default CustomButton;
