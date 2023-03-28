import CartList from "@components/cart/cart-list/cart-list";
import LayoutFlex from "@layouts/layout-flex";
import HistoryLinks from "@elements/history/history-links/history-links";
import { useOutletContext } from "react-router-dom";
import { PageSizesType } from "@containers/page-container/types";
import CartListSmall from "@components/cart/cart-list/cart-list-small";

const CartPage = () => {
  const historyData = [
    { link: "/", title: "Каталог" },
    { link: "/cart", title: "Корзина" },
  ];

  const { isBigScreen, isSmallScreen } = useOutletContext<PageSizesType>();

  return (
    <>
      {!isSmallScreen && (
        <LayoutFlex
          justifyContent="start"
          marginTop="30px"
          width={!isBigScreen ? "90%" : undefined}
        >
          <HistoryLinks data={historyData} />
        </LayoutFlex>
      )}

      {!isSmallScreen && <CartList screen={!isBigScreen ? "medium" : undefined} />}
      {isSmallScreen && <CartListSmall />}
    </>
  );
};

export default CartPage;
