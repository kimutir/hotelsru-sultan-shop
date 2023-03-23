import FooterAboutSmall from "@elements/footer-about-small/footer-about-small";
import FooterContacts from "@elements/footer-contacts/footer-contacts";
import FooterNav from "@elements/footer-nav/footer-nav";
import FooterPrice from "@elements/footer-price/footer-price";
import LayoutFlex from "@layouts/layout-flex";

const Footer = () => {
  const linksMenu = ["О компании", "Доставка и оплата", "Возврат", "Контакты"];
  const linksCategory = [
    "Бытовая химия",
    "Косметика и гигиена",
    "Товары для дома",
    "Товары для детей и мам",
    "Посуда",
  ];

  return (
    <LayoutFlex
      paddingBottom="70px"
      paddingTop="70px"
      backgroundColor="#3F4E65"
      justifyContent="space-between"
      alignItems="top"
    >
      <FooterAboutSmall />
      <FooterNav title="Меню сайта" links={linksMenu} />
      <FooterNav title="Категории" links={linksCategory} />
      <FooterPrice />
      <FooterContacts />
    </LayoutFlex>
  );
};

export default Footer;
