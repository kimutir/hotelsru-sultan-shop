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
  const [finalCatalog, setFinalCatalog] = React.useState({});

  const { isBigScreen, isMediumScreen, isSmallScreen } = useOutletContext<PageSizesType>();

  React.useEffect(() => {
    let inititalCatalog = { ...catalog };
    const catalogListFromLocalStorageJSON = localStorage.getItem("sultan-store-kim");
    const removedItemsJSON = localStorage.getItem("sultan-store-kim-deleted");
    const catalogFromLS = JSON.parse(catalogListFromLocalStorageJSON);
    for (const itemFromLS in catalogFromLS) {
      inititalCatalog[itemFromLS] = JSON.parse(catalogFromLS[itemFromLS]);
    }
    for (const catalogCode in inititalCatalog) {
      if (removedItemsJSON?.length && JSON.parse(removedItemsJSON).includes(catalogCode)) {
        delete inititalCatalog[catalogCode];
      }
    }

    setFinalCatalog(inititalCatalog);
  }, [catalog, itemCode]);

  const onAddToCart = React.useCallback(
    (amount: number) => {
      dispatch(addToCart({ item: finalCatalog[itemCode], amount }));
    },
    [catalog, finalCatalog, itemCode],
  );

  const historyData = [
    { link: "/", title: "Каталог" },
    { link: `/item/${itemCode}`, title: finalCatalog[itemCode]?.title },
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
      {isBigScreen && <ItemDescription onAddToCart={onAddToCart} item={finalCatalog[itemCode]} />}
      {isMediumScreen && (
        <ItemDescriptionMedium onAddToCart={onAddToCart} item={finalCatalog[itemCode]} />
      )}
      {isSmallScreen && (
        <ItemDescriptionSmall onAddToCart={onAddToCart} item={finalCatalog[itemCode]} />
      )}
    </>
  );
};

export default ItemPage;
