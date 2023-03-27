import CustomButton from "@custom/button/custom-button";
import downloadIcon from "@assets/images/icons/icon-download.png";
import telegramIcon from "@assets/images/icons/icon-telegram.png";
import whatsappIcon from "@assets/images/icons/icon-whatsapp.png";
import styles from "./footer-price.module.css";

const FooterPrice = () => {
  return (
    <div className={styles.price}>
      <p className={styles.title}>Скачать прайс-лист</p>
      <CustomButton text="Прайс-лист" icon={downloadIcon} />
      <p className={styles.text}>Связь в мессенджерах</p>
      <div className={styles.social}>
        <img src={whatsappIcon} alt="" />
        <img src={telegramIcon} alt="" />
      </div>
    </div>
  );
};

export default FooterPrice;
