import HeaderNavLink from "./header-nav-link";
import styles from "./header-nav.module.css";

const HeaderNavList = () => {
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
    <nav>
      <ul className={styles["nav-list"]}>
        {links.map((link) => (
          <HeaderNavLink key={link.id} item={link} />
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavList;
