import React from "react";
import CartList from "@components/cart/cart-list/cart-list";
import LayoutFlex from "@layouts/layout-flex";
import HistoryLinks from "@elements/history/history-links/history-links";
import { useOutletContext } from "react-router-dom";
import { PageSizesType } from "@containers/page-container/types";
import CartListSmall from "@components/cart/cart-list/cart-list-small";
import CartTotal from "@components/cart/cart-total/cart-total";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import CartModal from "@components/cart/cart-modal/cart-modal";
import { resetCart } from "@store/reducers/reducerCart";

const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const { isBigScreen, isSmallScreen } = useOutletContext<PageSizesType>();
  const cart = useAppSelector((state) => state.cart.items);

  const historyData = [
    { link: "/", title: "Каталог" },
    { link: "/cart", title: "Корзина" },
  ];

  React.useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isModalOpen]);

  const onConfirmOrder = () => {
    setIsModalOpen(true);
    dispatch(resetCart());
  };

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
      {Boolean(Object.keys(cart).length) && (
        <CartTotal
          screen={!isBigScreen && !isSmallScreen ? "medium" : isSmallScreen ? "small" : undefined}
          openModal={onConfirmOrder}
          items={cart}
        />
      )}
      {isModalOpen && <CartModal closeModal={setIsModalOpen} />}
    </>
  );
};

export default CartPage;
