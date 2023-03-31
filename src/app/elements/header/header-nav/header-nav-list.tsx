import HeaderNavLink from "./header-nav-link";
import styles from "./header-nav.module.css";
import React from "react";

interface PropsType {
  screen?: "medium" | "small" | "mobile";
}

const HeaderNavList: React.FC<PropsType> = ({ screen }) => {
  const links = [
    { id: "admin-page", title: "АДМИНКА", link: "/admin" },
    {
      id: "delivery-link",
      title: "АДМИНКА",
      link: "/admin",
    },
    { id: "back-link", title: "АДМИНКА", link: "/admin" },
    { id: "contacts-link", title: "АДМИНКА", link: "/admin" },
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
