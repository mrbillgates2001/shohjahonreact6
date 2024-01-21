import React from "react";
import { Link, Navigate } from "react-router-dom";

const Header = ({ User }) => {
  return (
    <div className="header">
      <div className="container">
        <div className="hd">
          <div className="ong">
            <p className="tovar">Товары</p>
            <p className="bolim">Главная / Товары</p>
          </div>
          <div className="chap">
            <img src="kirish.svg" alt="" />
            <Link to="/login" onClick={<Navigate to="/login" />}>
              {User ? (
                <p className="ism">{User}</p>
              ) : (
                <p className="ism">Выйти</p>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
