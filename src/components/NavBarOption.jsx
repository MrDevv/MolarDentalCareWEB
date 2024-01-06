import React from "react";
import { Link } from "react-router-dom";

export const NavBarOption = ({
  optionMenu,
  optionSelected,
  value_span,
  image,
  submenu,
  handleOption,
}) => {
  return (
    <div>
      <div
        className="navBar-link"
        onClick={() => handleOption(optionMenu)}
        style={{
          background: `${optionSelected === optionMenu ? "#00DAFF" : ""}`,
        }}
      >
        <span className="navBar_span">
          <i className={image}></i>
          {value_span}
        </span>        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="rgba(184, 187, 191)"
          style={{
            transform: `${
              optionSelected === optionMenu ? "rotate(180deg)" : ""
            }`,
            fill: `${optionSelected === optionMenu ? "#fff" : ""}`,
          }}
        >
          <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
        </svg>
      </div>

      <div
        className={`submenu ${
          optionSelected === optionMenu ? "showOptions" : ""
        }`}
      >
        <div className="options">
          {submenu &&
            submenu.map(({ name, link }) => (
              <Link key={name} className="navBar_link" to={link}>
                {name}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
