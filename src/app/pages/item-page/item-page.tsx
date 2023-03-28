import HistoryLinks from "@elements/history/history-links/history-links";
import ItemDescription from "@elements/item/item-description/item-description";
import LayoutFlex from "@layouts/layout-flex";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { addToCart } from "@store/reducers/reducerCart";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { PageSizesType } from "@containers/page-container/types";
import ItemDescriptionMedium from "@elements/item/item-description/item-description-medium";
import ItemDescriptionSmall from "@elements/item/item-description/item-description-small";

const ItemPage = () => {
  const { itemCode } = useLoaderData() as { itemCode: string };
  const dispatch = useAppDispatch();
  const catalog = useAppSelector((state) => state.catalog.list);

  const { isBigScreen, isMediumScreen, isSmallScreen } = useOutletContext<PageSizesType>();

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
      {!isSmallScreen && (
        <LayoutFlex
          justifyContent="start"
          marginTop="30px"
          width={!isBigScreen ? "90%" : undefined}
        >
          <HistoryLinks data={historyData} />
        </LayoutFlex>
      )}
      {isBigScreen && <ItemDescription onAddToCart={onAddToCart} item={catalog[itemCode]} />}
      {isMediumScreen && (
        <ItemDescriptionMedium onAddToCart={onAddToCart} item={catalog[itemCode]} />
      )}
      {isSmallScreen && <ItemDescriptionSmall onAddToCart={onAddToCart} item={catalog[itemCode]} />}
    </>
  );
};

export default ItemPage;
