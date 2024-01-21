import React, { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Asos from "./Components/Asos";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Await,
} from "react-router-dom";
import Login from "./Components/Login";
import All from "./Components/All";
import Error from "./Components/Error";
import Add from "./Components/Add";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [Editid, setEditid] = useState("");
  const [Products, setProducts] = useState([]);
  const [User, setUser] = useState("");
  // const [Username, setUsername] = useState("");

  const fechProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(User);
  useEffect(() => {
    fechProducts();
  }, []);
  return (
    <div className="blok">
      <Router>
        <Sidebar />
        <div>
          <Header User={User} />
          <Routes>
            <Route
              path="/asos"
              element={<Asos products={Products} User={User} />}
            />

            <Route
              path="/"
              element={
                <All
                  products={Products}
                  User={User}
                  Editid={Editid}
                  setEditid={setEditid}
                />
              }
            />

            <Route path="login" element={<Login setUser={setUser} />} />

            <Route path="*" element={<Error />} />
            <Route
              path="add"
              element={
                <Add User={User} Editid={Editid} setEditid={setEditid} />
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
