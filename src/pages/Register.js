import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/userSlice";
import { useNavigate } from "react-router";
import { useRegisterUserMutation } from "../services/productsApi";
import jwt from "jsonwebtoken";
import { Link } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  // const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasswor] = useState("");

  let [register] = useRegisterUserMutation();
  let navigate = useNavigate();
  let handleSubmit = (e) => {
    e.preventDefault();
    let userObj = {
      username: username,
      email: email,
      password: password,
    };
    register(userObj)
      .unwrap()
      .then((data) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <container className="register-container">
      <wrapper className="register-wrapper">
        <title>CREATE AN ACCOUNT</title>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="username"
          />
          <input
            id="email"
            type="email"
            className="validate"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email"
          />
          <input
            id="password"
            type="password"
            className="validate"
            value={password}
            onChange={(e) => {
              setPasswor(e.target.value);
            }}
            placeholder="password"
          />

          <agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </agreement>
          <button type="submit">CREATE</button>
        </form>
      </wrapper>
    </container>
  );
}
