import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  direction: "row" | "column";
  header: string;
  textPosition: "left" | "right";
  contentPosition: "top" | "bottom";
}

const Container: React.FC<ContainerProps> = ({
  children,
  direction,
  header,
  textPosition,
  contentPosition,
}) => {
  const containerStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: direction,
    justifyContent: contentPosition === "top" ? "flex-start" : "flex-end",
    alignItems: textPosition === "left" ? "flex-start" : "flex-end",
    border: "1px solid #ddd",
    padding: "20px",
    margin: "20px",
  };

  return (
    <div style={containerStyles}>
      <h2>{header}</h2>
      {children}
    </div>
  );
};

export default Container;
