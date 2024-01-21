import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sd">
        <NavLink to="/">
          <a href="#">
            <img src="logo.svg" alt="" />
          </a>
        </NavLink>
      </div>
      <div className="bb">
        <NavLink to="asos">
          <a href="#" className="jg">
            <img src="11.svg" alt="" />
          </a>
        </NavLink>
        <NavLink to="login">
          <a href="#" className="jg">
            <img src="22.svg" alt="" />
          </a>
        </NavLink>
        <NavLink to="add">
          <a href="#" className="jg">
            <img src="33.svg" alt="" />
          </a>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
