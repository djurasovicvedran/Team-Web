import React, { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";

const RegisterUser = () => {
  const [data, setData] = useState({ username: "", email: "", password: "" });

  const registerUser = async (e) => {
    e.preventDefault();
    const { username, email, password } = data;
    try {
      console.log(data);
      await axios.post("http://localhost:4000/register", {
        username,
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        ></input>
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

export default RegisterUser;
