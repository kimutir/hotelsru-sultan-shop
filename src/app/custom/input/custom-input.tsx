import React from "react";
import styles from "./custom-input.module.css";

interface PropsType {
  onSubmit?: () => void;
  onInput?: () => void;
  placeholder: string;
  icon: string;
}

const CustomInput: React.FC<PropsType> = (props) => {
  return (
    <form className={styles["input-wrapper"]}>
      <input
        type="text"
        name=""
        id=""
        placeholder={props.placeholder}
        className={styles.input}
      />
      <input
        className={styles.submit}
        type="submit"
        value=""
        style={{ backgroundImage: `url(${props.icon})` }}
      />
    </form>
  );
};

export default CustomInput;
