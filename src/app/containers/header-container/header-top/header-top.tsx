import HeaderContactsList from "@elements/header-contacts/header-contacts-list";
import HeaderNavList from "@elements/header-nav/header-nav-list";
import LayoutFlex from "../../../layouts/layout-flex";
import styles from "./header-top.module.css";

const HeaderTop = () => {
  return (
    <div className={styles["header-top"]}>
      <LayoutFlex justifyContent="space-between">
        <HeaderContactsList />
        <HeaderNavList />
      </LayoutFlex>
    </div>
  );
};

export default HeaderTop;
