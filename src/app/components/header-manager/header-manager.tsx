import React from "react";
import styles from "./header-manager.module.css";

interface PropsType {
  img: string;
}

const HeaderManager: React.FC<PropsType> = ({ img }) => {
  return (
    <div className={styles.manager}>
      <div>
        <p className={styles.phone}>+7 (888) 888-88-88</p>
        <p className={styles.time}>
          время работы: 08:00 - 19:00
        </p>
        <a className={styles.link} href="#">
          Заказать звонок
        </a>
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default HeaderManager;
