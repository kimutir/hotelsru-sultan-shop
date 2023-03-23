import getPaginationNumbers from "../../utils/getPaginationNumbers";
import React from "react";
import styles from "./pagination-numbers.module.css";

interface PropsType {
  perPage: number;
  itemsAmount: number;
  onPaginationClick?: (page: number) => void;
}

const PaginationNumbers: React.FC<PropsType> = ({ perPage, itemsAmount, onPaginationClick }) => {
  const pagesAmount = Math.ceil(itemsAmount / perPage);
  const [pages, setPages] = React.useState<number[]>([]);

  React.useEffect(() => {
    setPages(getPaginationNumbers({ pagesAmount }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perPage, itemsAmount]);

  return (
    <div className={styles.pagination}>
      {pages.map((page) => (
        <div
          className={styles["pagination-item"]}
          key={page}
          onClick={() => onPaginationClick(page)}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default PaginationNumbers;
