import LayoutFlex from "@layouts/layout-flex";
import CatalogList from "@components/catalog/catalog-list/catalog-list";
import React from "react";
import { useAppDispatch } from "@store/hooks";
import { changeSortParam } from "@store/reducers/reducerCatalog";
import HistoryLinks from "@elements/history/history-links/history-links";
import { useOutletContext } from "react-router-dom";
import { PageSizesType } from "@containers/page-container/types";
import CatalogSort from "@components/catalog/catalog-sort/catalog-sort";
import CatalogFilterFor from "@components/catalog/catalog-filter-for/catalog-filter-for";
import CatalogAside from "@components/catalog/catalog-aside/catalog-aside";

const CatalogMain = () => {
  const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isBigScreen, isMediumScreen, isSmallScreen } = useOutletContext<PageSizesType>();

  React.useEffect(() => {
    dispatch(changeSortParam("title-up"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterOptions = [
    { title: "За телом", value: "body" },
    { title: "За руками", value: "hands" },
  ];

  const historyData = [{ link: "/", title: "Каталог" }];

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

      <CatalogSort screen={isMediumScreen ? "medium" : isSmallScreen ? "small" : "big"} />
      <LayoutFlex justifyContent="start" width={!isBigScreen ? "90%" : undefined}>
        <CatalogFilterFor items={filterOptions} />
      </LayoutFlex>
      <LayoutFlex alignItems="top" justifyContent="space-between">
        <CatalogAside />
        <CatalogList />
      </LayoutFlex>
    </>
  );
};

export default CatalogMain;
