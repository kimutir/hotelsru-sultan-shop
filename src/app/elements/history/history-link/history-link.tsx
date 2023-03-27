import { NavLink } from "react-router-dom";
import React = require("react");
import styles from "./history-link.module.css";

interface PropsType {
  item: { link: string; title: string };
}

const HistoryLink: React.FC<PropsType> = ({ item }) => {
  return (
    <NavLink
      to={item.link}
      className={({ isActive }) => (isActive ? styles.active : styles["not-active"])}
    >
      {item.title}
    </NavLink>
  );
};

export default HistoryLink;
