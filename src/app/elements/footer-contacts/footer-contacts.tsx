import styles from "./footer-contacts.module.css";
import visaIcon from "@assets/images/icons/icon-visa.png";
import masterIcon from "@assets/images/icons/icon-mastercard.png";

const FooterContacts = () => {
  return (
    <div className={styles.contacts}>
      <p className={styles.title}>Контакты</p>
      <div className={styles.phone}>
        <p className={styles["sub-title"]}>+7 (777) 490-00-91</p>
        <p>время работы: 9:00-20:00</p>
        <a href="#">Заказать звонок</a>
      </div>
      <div className={styles.mail}>
        <p className={styles["sub-title"]}>opt.sultan@mail.ru</p>
        <p>На связи в любое время</p>
        <a href="#"></a>
      </div>
      <div className={styles.icons}>
        <img src={visaIcon} alt="" />
        <img src={masterIcon} alt="" />
      </div>
    </div>
  );
};

export default FooterContacts;
