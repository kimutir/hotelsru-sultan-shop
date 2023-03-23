/* eslint-disable react/no-unescaped-entities */
import CustomInput from "@custom/input/custom-input";
import iconEnter from "@assets/images/icons/icon-enter.png";
import logo from "@assets/images/logo-white.png";
import styles from "./footer-about-small.module.css";

const FooterAboutSmall = () => {
  return (
    <div className={styles.about}>
      <img className={styles.logo} src={logo} alt="" />
      <p className={styles.text}>
        Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и
        Акмолинской области
      </p>
      <div className={styles.mail}>
        <p>Подпишись на скидки и акции</p>
        <CustomInput placeholder="Введите email" icon={iconEnter} />
      </div>
    </div>
  );
};

export default FooterAboutSmall;
