import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../Components/Store";

const Login = () => {
  const [newUssername, setNewUsername] = useState("");

  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.value.username);

  return (
    <div className="Card">
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="name..."
        onChange={(e) => {
          setNewUsername(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(login({ username: newUssername }));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        logout
      </button><br/>
      The User is: {username}
    </div> 
  );
};

export default Login;
