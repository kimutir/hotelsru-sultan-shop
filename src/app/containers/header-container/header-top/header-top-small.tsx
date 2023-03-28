import HeaderCartIcon from "@components/header-cart/header-cart-icon/header-cart-icon";
import LayoutFlex from "@layouts/layout-flex";
import logo from "@assets/images/logo.png";
import BurgerMenu from "@components/burrger-menu/burger-menu";
import styles from "./header-top.module.css";

const HeaderTopSmall = () => {
  return (
    <div className={styles["header-top-small"]}>
      <LayoutFlex width="90%" justifyContent="space-between">
        <BurgerMenu />
        <img src={logo} alt="" />
        <HeaderCartIcon />
      </LayoutFlex>
    </div>
  );
};

export default HeaderTopSmall;
