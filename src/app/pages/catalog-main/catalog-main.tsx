import LayoutFlex from "@layouts/layout-flex";
import CustomSelect from "@custom/select/custom-select";
import FilterFor from "@elements/filters/filter-for/filter-for";
import CatalogList from "@components/catalog/catalog-list/catalog-list";
import React from "react";
import { useAppDispatch } from "@store/hooks";
import { loadCatalog, changeSortParam } from "@store/reducers/reducerCatalog";
import data from "../../../initial-data.json";
import MainAsideContainer from "@containers/main-aside-container/main-aside.container";

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
      description: "Название А-Я",
    },
    { value: "title-down", description: "Название Я-А" },
    { value: "price-up", description: "Цена по возрастанию" },
    { value: "price-down", description: "Цена по убыванию" },
  ];

  const filterOptions = [
    { title: "За телом", value: "body" },
    { title: "За руками", value: "hands" },
  ];

  return (
    <>
      <LayoutFlex justifyContent="flex-end" marginTop="10px">
        <CustomSelect
          onChangeSelect={(value: string) => dispatch(changeSortParam(value))}
          options={sortOptions}
          title="Сортировка"
        />
      </LayoutFlex>
      <LayoutFlex justifyContent="start">
        <FilterFor items={filterOptions} />
      </LayoutFlex>
      <LayoutFlex alignItems="top" justifyContent="space-between">
        <MainAsideContainer />
        <CatalogList />
      </LayoutFlex>
    </>
  );
};

export default CatalogMain;
