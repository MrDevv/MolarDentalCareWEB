import React from "react";

export const Header = ({title}) => {
  return (
    <header className="container-header">
      <div className="box-white"></div>
      <h2>{title}</h2>
    </header>
  );
};
