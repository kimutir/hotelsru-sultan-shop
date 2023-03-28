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
import HiddenContent from "@custom/hidden-content/hidden-content";

const CatalogMain = () => {
  const dispatch = useAppDispatch();

  const { isBigScreen, isMediumScreen, isSmallScreen, isSmallScreenList } =
    useOutletContext<PageSizesType>();

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

      {isSmallScreen && (
        <LayoutFlex width="90%" marginTop="40px">
          <HiddenContent title="ПОДБОР ПО ПАРАМЕТРАМ" screen="small">
            <CatalogFilterFor items={filterOptions} isAside={true} />
          </HiddenContent>
        </LayoutFlex>
      )}

      <CatalogSort screen={isMediumScreen ? "medium" : isSmallScreen ? "small" : "big"} />
      {!isSmallScreen && (
        <LayoutFlex justifyContent="start" width={!isBigScreen ? "90%" : undefined}>
          <CatalogFilterFor items={filterOptions} />
        </LayoutFlex>
      )}

      <LayoutFlex
        alignItems="top"
        justifyContent="space-between"
        gap="20px"
        width={!isBigScreen ? "90%" : undefined}
      >
        {!isSmallScreen && <CatalogAside />}
        <CatalogList
          screen={
            isMediumScreen && !isSmallScreenList
              ? "medium"
              : isSmallScreenList && isMediumScreen
              ? "small-list"
              : isSmallScreen
              ? "small"
              : "big"
          }
        />
      </LayoutFlex>
    </>
  );
};

export default CatalogMain;
