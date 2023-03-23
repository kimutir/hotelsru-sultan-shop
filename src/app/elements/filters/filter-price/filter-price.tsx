import React from "react";
import styles from "./filter-price.module.css";

interface PropsType {
  onInputChangeFrom: (value: string) => void;
  onInputChangeTo: (value: string) => void;
  reset: boolean;
  setReset: (value: boolean) => void;
}

const FilterPrice: React.FC<PropsType> = ({
  onInputChangeFrom,
  onInputChangeTo,
  reset,
  setReset,
}) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/[^0-9.]/g, "");
  };
  const fromRef = React.useRef<HTMLInputElement>();
  const toRef = React.useRef<HTMLInputElement>();

  const onInputChangeFromWithValid = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e);
    onInputChangeFrom(e.target.value);
  };
  const onInputChangeToWithValid = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e);
    onInputChangeTo(e.target.value);
  };

  React.useEffect(() => {
    if (reset) {
      fromRef.current.value = "";
      toRef.current.value = "";

      setReset(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset]);

  return (
    <div className={styles["filter-price"]}>
      <p className={styles.title}>Цена</p>
      <div className={styles.inputs}>
        <input ref={fromRef} type="text" onChange={onInputChangeFromWithValid} />
        <span>-</span>
        <input ref={toRef} type="text" onChange={onInputChangeToWithValid} />
      </div>
    </div>
  );
};

export default FilterPrice;
