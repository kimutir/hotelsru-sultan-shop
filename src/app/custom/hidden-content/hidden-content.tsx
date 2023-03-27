import React from "react";
import styles from "./hidden-content.module.css";

const HiddenContent = ({ children, title }) => {
  const contentRef = React.useRef<HTMLDivElement>();
  const triangleRef = React.useRef<HTMLSpanElement>();

  const onButtonClick = () => {
    contentRef.current.classList.toggle(styles.content);
    triangleRef.current.classList.toggle(styles.rotated);
  };

  return (
    <div>
      <button onClick={onButtonClick} className={styles.button}>
        {title}
        <span ref={triangleRef} className={styles.triangle}></span>
      </button>
      <div ref={contentRef} className={styles["content-hidden"]}>
        {children}
      </div>
    </div>
  );
};

export default HiddenContent;
