import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
const Asos = ({ product, User }) => {
  if (!User) {
    return <Navigate to="/login" replace />;
  }
  return (
    <>
      <div className="asos">
        <div className="text">
          <p className="jik">Вы пока не создали ни одного товара</p>
        </div>

        <div className="btncha">
          <Link to="/add">
            <a href="#" className="btn">
              Создать первый товар
            </a>
          </Link>
        </div>
      </div>
      <div className="footer">© Anymarket 2022</div>
    </>
  );
};

export default Asos;
