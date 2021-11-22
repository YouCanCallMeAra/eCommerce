import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login, logout } from "../features/userSlice";

export default function Login() {
  return (
    <div>
      <container className="login-container">
        <wrapper>
          <title>SIGN IN</title>
          <form>
            <input placeholder="username" />
            <input placeholder="password" />
            <button>LOGIN</button>
            <a>DO NOT YOU REMEMBER THE PASSWORD?</a>
            <a>CREATE A NEW ACCOUNT</a>
          </form>
        </wrapper>
      </container>
    </div>
  );
}
