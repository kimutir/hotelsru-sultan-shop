import styles from "./item-actions.module.css";
import iconShare from "@assets/images/icons/icon-share.png";
import iconDownloadGrey from "@assets/images/icons/icon-download-grey.png";

const ItemActions = () => {
  return (
    <div className={styles.actions}>
      <button>
        <img src={iconShare} alt="" />
      </button>
      <button>
        При покупке от <span className={styles.price}>10 000</span> ₸ бесплатная <br /> доставка по
        Кокчетаву и области
      </button>
      <button>
        <span className={styles["price-list"]}>Прайс-лист</span>{" "}
        <img src={iconDownloadGrey} alt="" />
      </button>
    </div>
  );
};

export default ItemActions;
