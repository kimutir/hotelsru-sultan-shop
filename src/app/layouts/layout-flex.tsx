import React from "react";

interface PropsType {
  justifyContent?:
    | "space-between"
    | "space-evenly"
    | "flex-end"
    | "start";
  flexDirection?: "column";
  alignItems?: "top";
  children: any;
  marginTop?: string;
}

const LayoutFlex: React.FC<PropsType> = ({
  children,
  justifyContent,
  alignItems,
  flexDirection,
  marginTop,
}) => {
  return (
    <div
      style={{
        margin: "0 auto",
        marginTop: marginTop ?? "0",
        width: "70%",
        height: "100%",
        display: "flex",
        justifyContent: justifyContent ?? "center",
        flexDirection: flexDirection ?? "row",
        alignItems: alignItems ?? "center",
      }}
    >
      {children}
    </div>
  );
};

export default LayoutFlex;
