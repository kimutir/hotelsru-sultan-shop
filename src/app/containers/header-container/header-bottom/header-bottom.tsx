import CustomButton from "@custom/button/custom-button";
import catalogIcon from "@assets/images/icons/icon-catalog.png";
import downloadIcon from "@assets/images/icons/icon-download.png";
import searchIcon from "@assets/images/icons/icon-search.png";
import managerPhoto from "@assets/images/manager.png";
import logo from "@assets/images/logo.png";
import CustomInput from "@custom/input/custom-input";
import styles from "./header-bottom.module.css";
import HeaderCart from "@components/header-cart/header-cart";
import LayoutFlex from "@layouts/layout-flex";
import HeaderManager from "@elements/header-manager/header-manager";

const HeaderBottom = () => {
  return (
    <div className={styles["header-bottom"]}>
      <LayoutFlex justifyContent="space-between">
        <img src={logo} alt="" />
        <CustomButton text="Каталог" icon={catalogIcon} />
        <CustomInput placeholder="Поиск..." icon={searchIcon} />
        <HeaderManager img={managerPhoto} />
        <CustomButton text="Прайс-лист" icon={downloadIcon} />
        <HeaderCart />
      </LayoutFlex>
    </div>
  );
};

export default HeaderBottom;
