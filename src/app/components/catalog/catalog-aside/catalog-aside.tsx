import styles from "./catalog-aside.module.css";
import FilterPrice from "@elements/filters/filter-price/filter-price";
import FilterCheckbox from "@elements/filters/filter-checkbox/filter-checkbox";
import CustomButton from "@custom/button/custom-button";
import trashIcon from "@assets/images/icons/icon-trash-white.png";
import LayoutFlex from "@layouts/layout-flex";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import React from "react";
import { changeFilterParams } from "@store/reducers/reducerCatalog";
import CatalogFilterFor from "@components/catalog/catalog-filter-for/catalog-filter-for";
import getCurrentCatalog from "@utils/getCurrentCatalog/getCurrentCatalog";

interface PropsType {
  top?: string;
  left?: string;
}

const CatalogAside: React.FC<PropsType> = ({ top, left }) => {
  const catalog = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();
  const [priceFrom, setPriceFrom] = React.useState("");
  const [priceTo, setPriceTo] = React.useState("");
  const [selectedBrends, setSelectedBrends] = React.useState<string[]>([]);
  const [resetCheckbox, setResetCheckbox] = React.useState(false);

  const checkboxOptions: string[] = React.useMemo(() => {
    const options = [];

    Object.values(getCurrentCatalog({ catalog: catalog.list }))
      .map((i) => i.brend)
      .forEach((i) => {
        if (!options.includes(i)) {
          options.push(i);
        }
      });
    return options;
  }, [catalog]);

  const filterOptions = [
    { title: "Уход за телом", value: "body" },
    { title: "Уход за руками", value: "hands" },
  ];

  const onCheckboxClick = (value: string) => {
    if (selectedBrends.includes(value)) {
      setSelectedBrends((prev) => prev.filter((i) => i != value));
    } else {
      setSelectedBrends((prev) => [...prev, value]);
    }
  };

  const onConfirmButtonClick = () => {
    let selectedPrice: string;
    if (!priceFrom && !priceTo) {
      selectedPrice = "";
    } else {
      selectedPrice = priceFrom + "-" + priceTo;
    }
    dispatch(changeFilterParams({ price: selectedPrice, brends: selectedBrends }));
  };

  const onTrashButtonClick = () => {
    setResetCheckbox(true);
    setPriceTo("");
    setPriceFrom("");
    setSelectedBrends([]);
    dispatch(changeFilterParams({ price: "", brends: [], for: [] }));
  };
  return (
    <div style={{ top: top ?? "0", left: left ?? "0" }} className={top && styles["aside-wrapper-small"]}>
      <div>
        <FilterPrice onInputChangeFrom={setPriceFrom} onInputChangeTo={setPriceTo} reset={resetCheckbox} setReset={setResetCheckbox} />
        <FilterCheckbox
          reset={resetCheckbox}
          setReset={setResetCheckbox}
          onChange={onCheckboxClick}
          checkboxOptions={checkboxOptions}
          title="Производитель"
          checkedOptions={catalog.filterParams.brends}
        />
        <LayoutFlex width="100%" justifyContent="start" height="auto" marginBottom="50px" gap="20px">
          <CustomButton onClick={onConfirmButtonClick} text="Показать" />
          <CustomButton onClick={onTrashButtonClick} isCircle={true} icon={trashIcon} />
        </LayoutFlex>
        <CatalogFilterFor items={filterOptions} isAside={true} />
      </div>
    </div>
  );
};

export default CatalogAside;
