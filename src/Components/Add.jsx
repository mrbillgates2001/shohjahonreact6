import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Add = ({ User, Editid, setEditid }) => {
  let [x, setX] = useState(false);
  let navg = useNavigate();
  let [values, setVal] = useState({
    title: "",
    description: "",
    price: "",
    brand: "",
    category: "",
  });

  if (!User) {
    return <Navigate to="/login" replace />;
  }
  //////////////////////////
  function Addproduct() {
    if (values.title !== "" && values.description !== "") {
      if (Editid !== "") {
        axios.put(`http://localhost:3000/products/${Editid}`, values);
        navg("/");
        setX(false);
        setEditid("");
      } else {
        axios.post(`http://localhost:3000/products`, values);
        setX(false);
        navg("/");
        setEditid("");
      }
    } else {
      setX(true);
    }
  }
  // Edit-------------------------------------------------

  const Editproduct = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/products/${Editid}`);
      const des = await res.data;
      if (Editid) {
        setVal(des);
      }
    } catch (error) {
      console.log(error);
    }
  };
  ////////////////////////////////////////////////////////////
  useEffect(() => {
    Editproduct();
  }, [Editid]);
  let onsub = (event) => {
    event.preventDefault();
  };
  // -----------------------------------------------------

  // /--------------------------------------------------
  return (
    <div className="asosall">
      <div className="OLX">
        <form onSubmit={onsub} id="formrest">
          <button className="nomi">Основные</button>
          <div className="ints">
            <div className="inputone">
              <label>
                <span>Название *</span>
                <input
                  name="Название"
                  onChange={(e) =>
                    setVal({
                      title: e.target.value,
                      description: values.description,
                      price: values.price,
                      brand: values.brand,
                      category: values.category,
                    })
                  }
                  type="text"
                  value={values.title}
                />
              </label>
            </div>

            <div className="inputtwo">
              <label>
                <span>Description *</span>
                <input
                  name="description"
                  value={values.description}
                  type="text"
                  onChange={(e) =>
                    setVal({
                      description: e.target.value,
                      title: values.title,
                      price: values.price,
                      brand: values.brand,
                      category: values.category,
                    })
                  }
                />
              </label>
            </div>

            <div className="inpast">
              <label>
                <span>Цена</span>
                <input
                  type="text"
                  name="Цена"
                  value={values.price}
                  onChange={(e) =>
                    setVal({
                      price: e.target.value,
                      title: values.title,
                      description: values.description,
                      brand: values.brand,
                      category: values.category,
                    })
                  }
                />
              </label>

              <label>
                <span>Brand</span>
                <input
                  name="Brand"
                  value={values.brand}
                  type="text"
                  onChange={(e) =>
                    setVal({
                      brand: e.target.value,
                      title: values.title,
                      price: values.price,
                      description: values.description,
                      category: values.category,
                    })
                  }
                />
              </label>
              <label>
                <span>Catigory</span>
                <input
                  name="Catigory"
                  value={values.category}
                  type="text"
                  onChange={(e) =>
                    setVal({
                      category: e.target.value,
                      title: values.title,
                      price: values.price,
                      brand: values.brand,
                      description: values.description,
                    })
                  }
                />
              </label>
            </div>
          </div>
          {x && (
            <p className="Error">
              Majburiy inputlarni kirgizmagansiz, To'ldirib qayta urunib ko'ring
              hurmatli <span className="span">{User}</span>
            </p>
          )}

          <div className="tugmalar">
            <button className="btnone" onClick={Addproduct}>
              Сохранить
            </button>
            <Link to="/" className="btntwo">
              Отмена
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
