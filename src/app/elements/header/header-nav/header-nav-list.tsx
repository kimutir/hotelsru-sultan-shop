import HeaderNavLink from "./header-nav-link";
import styles from "./header-nav.module.css";
import React from "react";

interface PropsType {
  screen?: "medium" | "small" | "mobile";
}

const HeaderNavList: React.FC<PropsType> = ({ screen }) => {
  const links = [
    { id: "company-link", title: "О Компании", link: "" },
    {
      id: "delivery-link",
      title: "Доставка и Оплата",
      link: "",
    },
    { id: "back-link", title: "Возврат", link: "" },
    { id: "contacts-link", title: "Контакты", link: "" },
  ];

  return (
    <nav className={screen === "medium" ? styles["nav-medium"] : ""}>
      <ul className={screen === "medium" ? styles["nav-list-medium"] : styles["nav-list"]}>
        {links.map((link) => (
          <HeaderNavLink key={link.id} item={link} />
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavList;
