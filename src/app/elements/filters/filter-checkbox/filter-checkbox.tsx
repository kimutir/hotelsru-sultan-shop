import React from "react";
import CustomInput from "../../../custom/input/custom-input";
import searchIcon from "@assets/images/icons/icon-search.png";
import styles from "./filter-checkbox.module.css";

interface PropsType {
  title: string;
  checkboxOptions: string[];
  onChange: (value: string) => void;
  reset: boolean;
  setReset: (value: boolean) => void;
}

// eslint-disable-next-line react/display-name
const FilterCheckbox: React.FC<PropsType> = React.memo(
  ({ title, checkboxOptions, onChange, reset, setReset }) => {
    const [optionsList, setOptionsList] = React.useState<string[]>([]);
    const [inputValue, setInputValue] = React.useState("");
    const checkboxWrapper = React.useRef<HTMLDivElement>();
    const customInput = React.useRef<HTMLFormElement>();

    React.useEffect(() => {
      if (inputValue) {
        setOptionsList(
          checkboxOptions.filter((i) => i.toLocaleLowerCase().includes(inputValue.trim())),
        );
      } else {
        setOptionsList(checkboxOptions);
      }
    }, [checkboxOptions]);

    React.useEffect(() => {
      if (reset) {
        if (checkboxWrapper.current) {
          checkboxWrapper.current.querySelectorAll("input").forEach((i) => (i.checked = false));
        }
        if (customInput.current) {
          (customInput.current.querySelector('input[type="text"]') as HTMLInputElement).value = "";
        }
        setOptionsList(checkboxOptions);

        setReset(false);
      }
    }, [reset]);

    const onSubmitInput = (searchValue: string | undefined = inputValue) => {
      setOptionsList(
        checkboxOptions.filter((i) => {
          if (searchValue === "") return i;
          return i.toLocaleLowerCase().includes(searchValue.trim());
        }),
      );
    };

    return (
      <div className={styles.filter}>
        <p className={styles.title}>{title}</p>
        <CustomInput
          formRef={customInput}
          onSubmit={onSubmitInput}
          onInutChange={setInputValue}
          placeholder="Поиск..."
          icon={searchIcon}
        />
        <div ref={checkboxWrapper} className={styles["checkbox-list"]}>
          {optionsList.length ? (
            optionsList.map((option) => (
              <div className={styles.checkbox} key={option}>
                <input
                  id={option}
                  type="checkbox"
                  value={option}
                  onChange={(e) => onChange(e.target.value)}
                />
                <label className={styles["checkbox-lable"]} htmlFor={option}>
                  {option}
                </label>
              </div>
            ))
          ) : (
            <p className={styles["checkbox-lable"]}>Не найдено</p>
          )}
        </div>
      </div>
    );
  },
);

export default FilterCheckbox;
