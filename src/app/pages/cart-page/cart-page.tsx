import CartList from "@components/cart/cart-list/cart-list";
import LayoutFlex from "@layouts/layout-flex";
import HistoryLinks from "@elements/history/history-links/history-links";

const CartPage = () => {
  const historyData = [
    { link: "/", title: "Каталог" },
    { link: "/cart", title: "Корзина" },
  ];

  return (
    <>
      <LayoutFlex justifyContent="start" marginTop="30px">
        <HistoryLinks data={historyData} />
      </LayoutFlex>
      <CartList />
    </>
  );
};

export default CartPage;
