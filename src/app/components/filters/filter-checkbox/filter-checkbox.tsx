import React from "react";
import CustomInput from "../../../custom/input/custom-input";
import searchIcon from "@assets/images/icons/icon-search.png";
import styles from "./filter-checkbox.module.css";

interface PropsType {
  title: string;
  checkboxOptions: { value: string; title: string }[];
}

const FilterCheckbox: React.FC<PropsType> = ({
  title,
  checkboxOptions,
}) => {
  return (
    <div className={styles.filter}>
      <p className={styles.title}>{title}</p>
      <CustomInput placeholder="Поиск..." icon={searchIcon} />
      <div className={styles["checkbox-list"]}>
        {checkboxOptions.map((option) => (
          <div className={styles.checkbox} key={option.value}>
            <input
              id={option.value}
              type="checkbox"
              value={option.value}
            />
            <label
              className={styles["checkbox-lable"]}
              htmlFor={option.value}
            >
              {option.title}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterCheckbox;
