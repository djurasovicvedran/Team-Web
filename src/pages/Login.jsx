import React, { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const loginUser = async (e, email, password) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/login", {
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={loginUser}>
        <label>E-mail</label>
        <input
          type="email"
          placeholder="Enter your e-mail"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        ></input>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        ></input>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
