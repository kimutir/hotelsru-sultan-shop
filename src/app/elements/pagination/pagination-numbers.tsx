import getPaginationNumbers from "@utils/paginationNumbers/getPaginationNumbers";
import React from "react";
import styles from "./pagination-numbers.module.css";
import nextIcon from "@assets/images/icons/icon-next.png";
import prevIcon from "@assets/images/icons/icon-prev.png";

interface PropsType {
  perPage: number;
  itemsAmount: number;
  onPaginationClick?: (page: number) => void;
  currentPage: number;
  nextPage: () => void;
  prevPage: () => void;
}

const PaginationNumbers: React.FC<PropsType> = ({
  perPage,
  itemsAmount,
  onPaginationClick,
  currentPage,
  nextPage,
  prevPage,
}) => {
  const pagesAmount = Math.ceil(itemsAmount / perPage);
  const [pages, setPages] = React.useState<number[]>([]);

  React.useEffect(() => {
    setPages(getPaginationNumbers({ pagesAmount }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perPage, itemsAmount]);

  return (
    <div className={styles.pagination}>
      <img onClick={prevPage} src={prevIcon} alt="" />
      {pages.map((page) => {
        if (page === currentPage) {
          return (
            <div
              className={[styles["pagination-item"], styles.active].join(" ")}
              key={page}
              onClick={() => onPaginationClick(page)}
            >
              {page}
            </div>
          );
        } else {
          return (
            <div
              className={styles["pagination-item"]}
              key={page}
              onClick={() => onPaginationClick(page)}
            >
              {page}
            </div>
          );
        }
      })}
      <img onClick={nextPage} src={nextIcon} alt="" />
    </div>
  );
};

export default PaginationNumbers;
