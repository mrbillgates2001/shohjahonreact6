import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const Login = ({ setUser }) => {
  return (
    <>
      <div className="asosall">
        <div className="box">
          <p className="textuz">Login</p>
          <Form>
            <Form.Group
              className="mb-3 w-50 m-auto"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Jon Dou"
                onChange={(e) => setUser(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 w-50 m-auto"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="JonDou" />
            </Form.Group>
            <Link to="/" type="button" className=" bb btn btn-primary">
              Login
            </Link>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
