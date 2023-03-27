import React from "react";
import HistoryLink from "../history-link/history-link";
import styles from "./history-links.module.css";

interface PropsType {
  data: { link: string; title: string }[];
}

const HistoryLinks: React.FC<PropsType> = ({ data }) => {
  return (
    <div className={styles["links-wrapper"]}>
      <a className={styles["not-active"]} href="#">
        Главная
      </a>
      {data.map((item, index) => (
        <HistoryLink item={item} key={index} />
      ))}
    </div>
  );
};

export default HistoryLinks;
