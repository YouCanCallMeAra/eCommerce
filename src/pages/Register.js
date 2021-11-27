import React from "react";

export default function Register() {
  return (
    <container className="register-container">
      <wrapper className="register-wrapper">
        <title>CREATE AN ACCOUNT</title>
        <form>
          {/* <input placeholder="name" />
          <input placeholder="last name" /> */}
          <input placeholder="username" />
          <input placeholder="email" />
          <input placeholder="password" />
          {/* <input placeholder="confirm password" /> */}
          <agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </agreement>
          <button>CREATE</button>
        </form>
      </wrapper>
    </container>
  );
}
