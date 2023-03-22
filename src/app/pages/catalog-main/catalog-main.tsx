import LayoutFlex from "@layouts/layout-flex";
import CustomSelect from "@custom/select/custom-select";
import FilterFor from "@components/filters/filter-for/filter-for";
import FilterCheckbox from "@components/filters/filter-checkbox/filter-checkbox";
import CatalogList from "@components/catalog/catalog-list/catalog-list";
import React from "react";
import { useAppDispatch } from "../../../store/hooks";
import {
  loadCatalog,
  changeSortParam,
} from "../../../store/reducers/reducerCatalog";
import data from "../../../initial-data.json";

const CatalogMain = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(loadCatalog(data));
    dispatch(changeSortParam("title-up"));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sortOptions = [
    {
      value: "title-up",
      description: "Название по возрастанию",
    },
    { value: "title-down", description: "Название по убыванию" },
    { value: "price-up", description: "Цена по возростанию" },
    { value: "price-down", description: "Цена по убыванию" },
  ];

  const filterOptions = [
    { title: "За телом", value: "body" },
    { title: "За руками", value: "hands" },
  ];

  const checkboxOptions = [
    { value: "a", title: "first" },
    { value: "b", title: "second" },
  ];

  return (
    <>
      <LayoutFlex justifyContent="flex-end" marginTop="10px">
        <CustomSelect
          onChangeSelect={(value: string) =>
            dispatch(changeSortParam(value))
          }
          options={sortOptions}
          title="Сортировка"
        />
      </LayoutFlex>
      <LayoutFlex justifyContent="start">
        <FilterFor items={filterOptions} />
      </LayoutFlex>
      <LayoutFlex
        alignItems="top"
        justifyContent="space-between"
      >
        <FilterCheckbox
          checkboxOptions={checkboxOptions}
          title="Производитель"
        />

        <CatalogList />
      </LayoutFlex>
    </>
  );
};

export default CatalogMain;
