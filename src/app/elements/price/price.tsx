import React from "react";

interface PropsType {
  value: number;
}

const Price: React.FC<PropsType> = ({ value }) => {
  return (
    <>
      {Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
        minimumFractionDigits: 0,
      }).format(value)}
    </>
  );
};

export default Price;
