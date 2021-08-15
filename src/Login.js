import { Link } from "@material-ui/core";
import { useHistory } from "react-router";
import React from "react";
import { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="data:image/png;base64,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"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signinButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Clone Conditions of Use and
          Privacy Notice.
        </p>
        <button
          type="submit"
          onClick={register}
          className="login__registerButton"
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
