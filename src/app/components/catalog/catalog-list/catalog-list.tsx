/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useAppSelector } from "@store/hooks";
import CatalogItem from "../catalog-item/catalog-item";
import styles from "./catalog-list.module.css";
import { CatalogItemType } from "@store/reducers/reducerCatalog";
import PaginationNumbers from "@elements/pagination/pagination-numbers";

interface PropsType {
  screen?: "medium" | "small" | "big" | "small-list";
}

const CatalogList: React.FC<PropsType> = ({ screen }) => {
  const catalog = useAppSelector((state) => state.catalog.list);
  const sortParam = useAppSelector((state) => state.catalog.sortParam);
  const filterParams = useAppSelector((state) => state.catalog.filterParams);

  const [catalogList, setCatalogList] = React.useState<CatalogItemType[]>(Object.values(catalog));
  const [sortedCatalogList, setSortedCatalogList] = React.useState<CatalogItemType[]>([]);
  const [renderCatalogList, setRenderCatalogList] = React.useState<CatalogItemType[]>([]);

  const [page, setPage] = React.useState(1);
  const perPage = 12;

  const callbacks = {
    nextPage: React.useCallback(() => {
      const calculatedPages = Math.ceil(sortedCatalogList.length / perPage);
      if (page < calculatedPages) setPage((prev) => ++prev);
    }, [sortedCatalogList, page]),
    prevPage: React.useCallback(() => {
      if (page > 1) setPage((prev) => (prev -= 1));
    }, [sortedCatalogList, page]),
  };

  // сортировка списка товаров
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
    let result = [...Object.values(inititalCatalog)];
    const [value, direction] = sortParam.split("-");
    if (direction === "down") {
      result.sort((a, b) => (a[value] > b[value] ? -1 : 1));
    }
    if (direction === "up") {
      result.sort((a, b) => (a[value] > b[value] ? 1 : -1));
    }

    setSortedCatalogList(result);
  }, [sortParam]);

  // фильтрация списка товаров
  React.useEffect(() => {
    let result = [...sortedCatalogList];
    if (
      Object.values(filterParams)
        .map((i) => {
          if (!i || !i.length) {
            return false;
          } else {
            return true;
          }
        })
        .includes(true)
    ) {
      if (filterParams.for.length) {
        for (const filterParam of filterParams.for) {
          result = result.filter((i) => i.for.includes(filterParam));
        }
      }
      if (filterParams.brends.length) {
        result = result.filter((i) => filterParams.brends.includes(i.brend));
      }
      if (filterParams.price) {
        const [from, to] = filterParams.price.split("-");
        const fromNumber = Number(from) || 0;
        const toNumber = Number(to) || Infinity;

        result = result.filter((i) => i.price >= fromNumber && i.price <= toNumber);
      }
    }
    setCatalogList(result);
  }, [filterParams, sortedCatalogList]);

  // список товаров на страницу
  React.useEffect(() => {
    if (page > Math.ceil(catalogList.length / perPage))
      setPage(Math.ceil(catalogList.length / perPage) || 1);

    let result = [...catalogList];
    result = result.slice((page - 1) * perPage, perPage * page);

    setRenderCatalogList(result);
  }, [page, catalogList]);

  return (
    <div
      className={
        screen === "medium"
          ? styles["catalog-list-meduim"]
          : screen === "small" || screen === "small-list"
          ? styles["catalog-list-small"]
          : styles["catalog-list"]
      }
    >
      <div className={!screen.includes("small") ? styles.catalog : styles["catalog-small"]}>
        {renderCatalogList.length
          ? renderCatalogList.map((item) => <CatalogItem item={item} key={item["code"]} />)
          : "Не найдено"}
      </div>
      <PaginationNumbers
        nextPage={callbacks.nextPage}
        prevPage={callbacks.prevPage}
        currentPage={page}
        onPaginationClick={setPage}
        perPage={perPage}
        itemsAmount={catalogList.length}
      />
      <p className={styles["catalog-list-description"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consectetur, quam sint
        alias modi ipsa enim magni aliquid veniam voluptatibus optio est minima sit, dolorum commodi
        consequuntur recusandae laudantium nemo. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Cupiditate consectetur, quam sint alias modi ipsa enim magni aliquid veniam
        voluptatibus optio est minima sit, dolorum commodi consequuntur recusandae laudantium nemo.
      </p>
    </div>
  );
};

export default CatalogList;
