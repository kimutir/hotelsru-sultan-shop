import React from "react";
import styles from "./header-nav.module.css";
import { NavLink } from "react-router-dom";

interface PropsType {
  item: { id: string; title: string; link: string };
}

const HeaderNavLink: React.FC<PropsType> = ({ item }) => {
  return (
    <li>
      <NavLink to={item.link} className={styles["nav-item"]}>
        {item.title}
      </NavLink>
    </li>
  );
};

export default HeaderNavLink;
