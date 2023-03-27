import HistoryLinks from "@elements/history/history-links/history-links";
import ItemDescription from "@elements/item/item-description/item-description";
import LayoutFlex from "@layouts/layout-flex";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { addToCart } from "@store/reducers/reducerCart";
import React from "react";
import { useLoaderData } from "react-router-dom";

const ItemPage = () => {
  const { itemCode } = useLoaderData() as { itemCode: string };
  const dispatch = useAppDispatch();
  const catalog = useAppSelector((state) => state.catalog.list);

  const onAddToCart = React.useCallback(
    (amount: number) => {
      dispatch(addToCart({ item: catalog[itemCode], amount }));
    },
    [itemCode],
  );

  const historyData = [
    { link: "/", title: "Каталог" },
    { link: `/item/${itemCode}`, title: catalog[itemCode].title },
  ];

  return (
    <>
      <LayoutFlex justifyContent="start" marginTop="30px">
        <HistoryLinks data={historyData} />
      </LayoutFlex>
      <ItemDescription onAddToCart={onAddToCart} item={catalog[itemCode]} />
    </>
  );
};

export default ItemPage;
