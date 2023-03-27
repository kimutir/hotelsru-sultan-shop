import CustomButton from "@custom/button/custom-button";
import catalogIcon from "@assets/images/icons/icon-catalog.png";
import searchIcon from "@assets/images/icons/icon-search.png";
import logo from "@assets/images/logo.png";
import CustomInput from "@custom/input/custom-input";
import styles from "./header-bottom.module.css";
import HeaderCart from "@components/header-cart/header-cart";
import LayoutFlex from "@layouts/layout-flex";
import { useNavigate } from "react-router-dom";

const HeaderBottomMedium = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["header-bottom"]}>
      <LayoutFlex justifyContent="space-evenly" width="90%">
        <img src={logo} alt="" />
        <CustomButton onClick={() => navigate("/")} text="Каталог" icon={catalogIcon} />
        <CustomInput placeholder="Поиск..." icon={searchIcon} />
        <HeaderCart />
      </LayoutFlex>
    </div>
  );
};

export default HeaderBottomMedium;
