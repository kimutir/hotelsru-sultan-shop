import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { changeFilterParams } from "../../../../store/reducers/reducerCatalog";
import styles from "./filter-for.module.css";

interface PropsType {
  items: { title: string; value: string }[];
  onFilterCLick?: () => void;
  isAside?: boolean;
}

const CatalogFilterFor: React.FC<PropsType> = ({ items, isAside }) => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.catalog.filterParams);

  const onFilterItemClick = (item: { title: string; value: string }) => {
    dispatch(changeFilterParams({ for: item.value }));
  };

  return (
    <div className={isAside ? styles["filter-aside"] : styles.filter}>
      {items.map((item) => (
        <button
          className={[
            isAside ? styles["filter-item-aside"] : styles["filter-item"],
            filter.for.includes(item.value) && styles.clicked,
          ].join(" ")}
          onClick={() => onFilterItemClick(item)}
          key={item.value}
        >
          <p>{item.title}</p>
        </button>
      ))}
    </div>
  );
};

export default CatalogFilterFor;
