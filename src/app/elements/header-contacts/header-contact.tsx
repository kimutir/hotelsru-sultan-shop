import React from "react";
import styles from "./header-contacts.module.css";

interface PropsType {
  item: {
    id: string;
    value: string;
    description: string;
    logo: string;
  };
}

const HeaderContact: React.FC<PropsType> = ({ item }) => {
  return (
    <li className={styles.contact}>
      <img className={styles["contact-logo"]} src={item.logo} />
      <div>
        <p className={styles["contact-title"]}>{item.value}</p>
        <p className={styles["contact-description"]}>
          {item.description}
        </p>
      </div>
    </li>
  );
};

export default HeaderContact;
