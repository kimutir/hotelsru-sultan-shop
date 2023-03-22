import React from "react";
import styles from "./custom-select.module.css";
import SelectOption from "./select-option";

interface PropsType {
  title: string;
  options: { value: string; description: string }[];
  onChangeSelect: any;
}

const CustomSelect: React.FC<PropsType> = ({
  title,
  options,
  onChangeSelect,
}) => {
  return (
    <div className={styles["select-wrapper"]}>
      <p className={styles["select-title"]}>{title}:</p>
      <select
        onChange={(e) => onChangeSelect(e.target.value)}
        className={styles.select}
      >
        {options.map((i) => (
          <SelectOption
            key={i.value}
            decription={i.description}
            value={i.value}
          />
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
