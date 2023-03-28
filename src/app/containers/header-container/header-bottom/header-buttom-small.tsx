import styles from "./header-bottom.module.css";
import iconSearch from "@assets/images/icons/icon-search-dark.png";
import iconCatalog from "@assets/images/icons/icon-catalog-dark.png";
import { useNavigate } from "react-router-dom";

const HeaderBottomSmall = () => {
  const navigate = useNavigate();

  const onCatalogClick = () => {
    navigate("/");
  };

  return (
    <div className={styles["header-bottom-small"]}>
      <button onClick={onCatalogClick}>
        <img src={iconCatalog} alt="" />
        <span>Каталог</span>
      </button>
      <span className={styles.border} />
      <button>
        <img src={iconSearch} alt="" />
        <span>Поиск</span>
      </button>
    </div>
  );
};

export default HeaderBottomSmall;
