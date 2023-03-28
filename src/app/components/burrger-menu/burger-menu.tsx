import React from "react";
import styles from "./burger-menu.module.css";
import burgerIcon from "@assets/images/icons/icon-burger.png";
import CatalogAside from "@components/catalog/catalog-aside/catalog-aside";

const BurgerMenu = () => {
  const [hidden, setHidden] = React.useState(true);

  const onBurgerClick = () => {
    setHidden(!hidden);
  };

  return (
    <>
      <div className={styles.burger} onClick={onBurgerClick}>
        <img src={burgerIcon} alt="" />
      </div>
      {!hidden && <CatalogAside top="130px" left="0" />}
    </>
  );
};

export default BurgerMenu;
