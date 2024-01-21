import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "axios";
import axios from "axios";
const All = ({ User, Editid, setEditid }) => {
  const [Search, setSearch] = useState("");
  const [Products, setProducts] = useState([]);
  const [Select, setSelect] = useState("");
  const navigate = useNavigate();

  //////////////////////////////////////
  console.log(Search);
  console.log(Select);
  //////////////////////////////////////
  const fechProducts = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/products`);
      const str = await res.data;
      setProducts(str);
    } catch (error) {
      console.log(error);
    }
  };
  //////////////////////////////////////////
  const handleEdit = (id) => {
    setEditid(id);
    navigate("/add");
  };
  // delete-------------------------------------------------------
  const handleDelete = (id) => {
    if (confirm("Would you like to Delete")) {
      axios
        .delete(`http://localhost:3000/products/${id}`)
        .then((response) => {
          console.log("Resource deleted successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error deleting resource:", error);
        });
      fechProducts();
      fechProducts();
    }
  };
  //------------------------------------------------------------------
  console.log(Products);
  useEffect(() => {
    fechProducts();
  }, []);
  ///////////////////////////////////////////////
  if (!User) {
    return <Navigate to="/login" replace />;
  }
  ///////////////////////////////////////////////
  return (
    <>
      <div className="asosall2">
        <div className="box">
          <div className="hdr">
            <p className="vse">Все товары (5)</p>
            <div>
              <label for="cars" className="vse1">
                Бренд select:
              </label>
              <select
                name="select"
                id="select"
                className="input-select"
                onChange={(e) => setSelect(e.target.value)}
              >
                <option value="">ALL</option>
                <option value="oppo">OPPO</option>
                <option value="apple">APPLE</option>
                <option value="samsung">SAMSUNG</option>
                <option value="vivo">VIVO</option>
              </select>
            </div>
            <input
              type="search"
              name="search"
              id="search"
              className="input-sr"
              placeholder="Поиск"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="line"></div>
        <hr className="hr" />
        <div className="box">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">
                  <img src="chek.svg" alt="" />
                </th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Бренд</th>
                <th scope="col">Цена</th>
                <th scope="col">Category</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {Products.filter((product) => {
                if (Search === "" && Select === "") {
                  return product;
                } else if (
                  product.title.toLowerCase().includes(Search.toLowerCase()) &&
                  product.brand.toLowerCase().includes(Select.toLowerCase())
                ) {
                  return product;
                }
              }).map((product) => (
                <tr key={product.id}>
                  <th scope="row">
                    <img src="chek.svg" alt="" />
                  </th>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>{product.brand}</td>
                  <td>{product.price}$</td>
                  <td>{product.category}</td>
                  <td>
                    <div className="delet">
                      <button
                        className="dalete"
                        onClick={() => handleEdit(product.id)}
                      >
                        <img src="edit.svg" alt="" />
                      </button>
                      <button
                        className="dalete"
                        onClick={() => handleDelete(product.id)}
                      >
                        <img src="delet.svg" alt="" lassName="delet" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="footer1">
        <Link to="/add">
          <div className="btn1">+ Новый товар</div>
        </Link>
        <p className="sv">© Anymarket 2022</p>
      </div>
    </>
  );
};

export default All;
