import React from "react";
import { useAppDispatch } from "../../../../store/hooks";
import { changeFilterParams } from "../../../../store/reducers/reducerCatalog";
import styles from "./filter-for.module.css";

interface PropsType {
  items: { title: string; value: string }[];
  onCLick?: () => void;
}

const FilterFor: React.FC<PropsType> = ({ items }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filter}>
      {items.map((item) => (
        <div
          className={styles["filter-item"]}
          onClick={() =>
            dispatch(
              changeFilterParams({ price: "", for: item.value }),
            )
          }
          key={item.value}
        >
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default FilterFor;
