import styles from "./item-actions.module.css";
import iconDownloadGrey from "@assets/images/icons/icon-download-grey.png";

const ItemActionsSmall = () => {
  return (
    <div className={styles["actions-small"]}>
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

export default ItemActionsSmall;
