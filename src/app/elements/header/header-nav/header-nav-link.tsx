import React from "react";
import styles from "./header-nav.module.css";

interface PropsType {
  item: { id: string; title: string; link: string };
}

const HeaderNavLink: React.FC<PropsType> = ({ item }) => {
  return (
    <li>
      <a className={styles["nav-item"]} href={item.link}>
        {item.title}
      </a>
    </li>
  );
};

export default HeaderNavLink;
