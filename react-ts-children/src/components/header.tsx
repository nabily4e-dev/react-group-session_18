import React, { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
  header: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ children, header, description }) => {
  return (
    <div className="container">
      <h1>{header}</h1>
      <p>{description}</p>
      {children}
    </div>
  );
};

export default Header;
