import LayoutFlex from "@layouts/layout-flex";
import CustomSelect from "@custom/select/custom-select";
import { useAppDispatch } from "@store/hooks";
import { changeSortParam } from "@store/reducers/reducerCatalog";
import React from "react";

interface PropsType {
  screen?: "medium" | "small" | "big";
}

const CatalogSort: React.FC<PropsType> = ({ screen }) => {
  const dispatch = useAppDispatch();
  const sortOptions = [
    {
      value: "title-up",
      description: "Название А-Я",
    },
    { value: "title-down", description: "Название Я-А" },
    { value: "price-up", description: "Цена по возрастанию" },
    { value: "price-down", description: "Цена по убыванию" },
  ];
  return (
    <LayoutFlex
      justifyContent={screen !== "small" ? "flex-end" : undefined}
      marginTop="10px"
      width={screen === "medium" ? "90%" : undefined}
    >
      <CustomSelect
        onChangeSelect={(value: string) => dispatch(changeSortParam(value))}
        options={sortOptions}
        title="Сортировка"
      />
    </LayoutFlex>
  );
};

export default CatalogSort;
