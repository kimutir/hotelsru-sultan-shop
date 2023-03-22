import React from "react";
import { useAppSelector } from "@store/hooks";
import CatalogItem from "../catalog-item/catalog-item";
import styles from "./catalog-list.module.css";
import { CatalogItemType } from "@store/reducers/reducerCatalog";

const CatalogList = () => {
  const catalog = useAppSelector((state) => state.catalog.list);
  const sortParam = useAppSelector(
    (state) => state.catalog.sortParam,
  );
  const filterParams = useAppSelector(
    (state) => state.catalog.filterParams,
  );

  const [catalogList, setCatalogList] =
    React.useState<CatalogItemType[]>(catalog);

  React.useEffect(() => {
    const result = [...catalog];
    const [value, direction] = sortParam.split("-");
    if (direction === "down") {
      result.sort((a, b) => (a[value] > b[value] ? -1 : 1));
    }
    if (direction === "up") {
      result.sort((a, b) => (a[value] > b[value] ? 1 : -1));
    }
    setCatalogList(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortParam]);

  React.useEffect(() => {
    const result = catalog.filter(
      (i) => i.for === filterParams.for,
    );
    setCatalogList(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterParams]);

  return (
    <div className={styles["catalog-list"]}>
      {catalogList.length &&
        catalogList.map((item) => (
          <CatalogItem item={item} key={item["code"]} />
        ))}
    </div>
  );
};

export default CatalogList;
