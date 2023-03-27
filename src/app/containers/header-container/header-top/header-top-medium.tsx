import HeaderNavList from "@elements/header/header-nav/header-nav-list";
import LayoutFlex from "../../../layouts/layout-flex";
import styles from "./header-top.module.css";

const HeaderTopMedium = () => {
  return (
    <div className={styles["header-top-medium"]}>
      <LayoutFlex flexDirection="column" gap="20px" width="80%">
        <HeaderNavList screen="medium" />
      </LayoutFlex>
    </div>
  );
};

export default HeaderTopMedium;
