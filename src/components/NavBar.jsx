import React, { useState } from "react";
import { NavBarOption } from "./NavBarOption";
import { menuOptions } from "../utils/getMenuOptions";

export const NavBar = () => {
  const [option, setOption] = useState(false);

  const handleOption = (optionMenu) => {
    setOption(option === optionMenu ? false : optionMenu);
  };

  return (
    <nav className="navBar-container">
      <div className="logo">
        <img src="/assets/logo.png" alt="" />
      </div>

      <div className="navBar-menu">
        {menuOptions.map(({ optionMenu, value_span, image, submenu }) => (
          <NavBarOption
            key={optionMenu}
            optionMenu={optionMenu}
            optionSelected={option}
            value_span={value_span}
            image={image}
            submenu={submenu}
            handleOption={handleOption}
          />
        ))}
      </div>

      <div className="logout">
        <button>
          <i className="fa-solid fa-right-from-bracket"></i> Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};
