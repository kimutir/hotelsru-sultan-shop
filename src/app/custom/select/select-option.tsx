import React from "react";

interface PropsType {
  value: string;
  decription: string;
}

const SelectOption: React.FC<PropsType> = ({
  value,
  decription,
}) => {
  return <option value={value}>{decription}</option>;
};

export default SelectOption;
