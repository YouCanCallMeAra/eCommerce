import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/userSlice";
import { useLoginUserMutation } from "../services/productsApi";
import jwt from "jsonwebtoken";
import { Link, Navigate } from "react-router-dom";

export default function Login() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userLogin, { isError, isLoading, data, error }] =
    useLoginUserMutation();

  useEffect(() => {
    data && dispatch(login(jwt.decode(data?.token)));
  }, [data]);
  return (
    <div>
      {/* {JSON.stringify(jwt.decode(data?.token))}
      {JSON.stringify(error)} */}
      {isAuth && <Navigate to="/" />}
      <container className="login-container">
        <wrapper>
          <title>SIGN IN</title>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              userLogin({ email, password });
            }}
            action="#"
            method="POST"
          >
            <input
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="password"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
            />
            <button type="submit">LOGIN</button>

            {/* <a>DO NOT YOU REMEMBER THE PASSWORD?</a> */}

            <Link to="/register">CREATE A NEW ACCOUNT</Link>
          </form>
          {data && localStorage.setItem("authToken", data.token)}
        </wrapper>
      </container>
    </div>
  );
}
