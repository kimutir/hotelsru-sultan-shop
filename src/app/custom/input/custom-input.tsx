import React from "react";
import styles from "./custom-input.module.css";

interface PropsType {
  onSubmit?: (value?: string) => void;
  onInutChange?: (e: string) => void;
  placeholder: string;
  icon: string;
  id?: string;
  formRef?: React.MutableRefObject<HTMLFormElement>;
  testIdInput?: string;
  testIdSubmit?: string;
}

const CustomInput: React.FC<PropsType> = (props) => {
  const onSubmitHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit();
  };

  const onInputChangehandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onInutChange(e.target.value);

    if (e.target.value === "") {
      props.onSubmit("");
    }
  };

  return (
    <form
      ref={props.formRef}
      id={props.id ?? ""}
      className={styles["input-wrapper"]}
      onSubmit={(e) => onSubmitHandle(e)}
    >
      <input
        onChange={(e) => onInputChangehandle(e)}
        type="text"
        placeholder={props.placeholder}
        className={styles.input}
        data-testid={props.testIdInput || null}
      />
      <input
        data-testid={props.testIdSubmit || null}
        className={styles.submit}
        type="submit"
        value=""
        style={{ backgroundImage: `url(${props.icon})`, backgroundColor: "transparent" }}
      />
    </form>
  );
};

export default CustomInput;
