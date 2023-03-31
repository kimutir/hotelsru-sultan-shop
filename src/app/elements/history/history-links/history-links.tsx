import React from "react";
import HistoryLink from "../history-link/history-link";
import styles from "./history-links.module.css";
import { NavLink } from "react-router-dom";

interface PropsType {
  data: { link: string; title: string }[];
}

const HistoryLinks: React.FC<PropsType> = ({ data }) => {
  return (
    <div className={styles["links-wrapper"]}>
      <NavLink className={styles["not-active"]} to="/">
        Главная
      </NavLink>
      {data.map((item, index) => (
        <HistoryLink item={item} key={index} />
      ))}
    </div>
  );
};

export default HistoryLinks;
