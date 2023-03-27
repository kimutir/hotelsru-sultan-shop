import React from "react";

interface PropsType {
  justifyContent?: "space-between" | "space-evenly" | "flex-end" | "start";
  flexDirection?: "column";
  alignItems?: "top";
  children: any;
  marginTop?: string;
  marginBottom?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  paddingTop?: string;
  paddingBottom?: string;
  gap?: string;
}

const LayoutFlex: React.FC<PropsType> = ({
  children,
  justifyContent,
  alignItems,
  flexDirection,
  marginTop,
  marginBottom,
  width,
  height,
  backgroundColor,
  paddingTop,
  paddingBottom,
  gap,
}) => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: backgroundColor ?? "",
        display: "flex",
        justifyContent: "center",
        height: height ?? "100%",
      }}
    >
      <div
        style={{
          gap: gap ?? "",
          paddingTop: paddingTop ?? "0",
          paddingBottom: paddingBottom ?? "0",
          marginTop: marginTop ?? "0",
          marginBottom: marginBottom ?? "0",
          width: width ?? "1370px",
          display: "flex",
          justifyContent: justifyContent ?? "center",
          flexDirection: flexDirection ?? "row",
          alignItems: alignItems ?? "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default LayoutFlex;
