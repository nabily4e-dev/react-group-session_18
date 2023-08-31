import React from "react";
import ChildComponent from "./child-component";

const ParentComponent: React.FC = () => {
  return (
    <div className="parent">
      <ChildComponent />
      <ChildComponent />
      <ChildComponent />
    </div>
  );
}

export default ParentComponent;
