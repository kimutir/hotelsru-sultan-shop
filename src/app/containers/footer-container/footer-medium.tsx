import FooterAboutSmall from "@elements/footer/footer-about-small/footer-about-small";
import FooterContacts from "@elements/footer/footer-contacts/footer-contacts";
import FooterNav from "@elements/footer/footer-nav/footer-nav";
import FooterPrice from "@elements/footer/footer-price/footer-price";
import LayoutFlex from "@layouts/layout-flex";

const FooterMedium = () => {
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
      flexDirection="column"
      width="80%"
      gap="40px"
    >
      <div style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>
        <FooterAboutSmall />
        <FooterContacts />
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>
        <FooterNav title="Меню сайта" links={linksMenu} />
        <FooterNav title="Категории" links={linksCategory} />
        <FooterPrice />
      </div>
    </LayoutFlex>
  );
};

export default FooterMedium;
