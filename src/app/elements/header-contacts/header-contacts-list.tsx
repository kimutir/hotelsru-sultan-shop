import HeaderContact from "./header-contact";
import styles from "./header-contacts.module.css";
import logoLocation from "@assets/images/icons/icon-location.png";
import logoMail from "@assets/images/icons/icon-mail.png";

const HeaderContactsList = () => {
  const contacts = [
    {
      id: "header-contact-adress",
      value: "г. Кокчетав, ул. Ж. Ташенова 129Б",
      description: "(Рынок Восточный)",
      logo: logoLocation,
    },
    {
      id: "header-contact-mail",
      value: "opt.sultan@mail.ru",
      description: "На связи в любое время",
      logo: logoMail,
    },
  ];

  return (
    <ul className={styles["contacts-list"]}>
      {contacts.map((contact) => (
        <HeaderContact key={contact.id} item={contact} />
      ))}
    </ul>
  );
};

export default HeaderContactsList;
