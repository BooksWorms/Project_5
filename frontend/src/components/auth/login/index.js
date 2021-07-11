import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../../reducers/login";
import { GoogleLogin } from "react-google-login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  // useSelector gives us access to the store
  const state = useSelector((state) => {
    // specify which state to subscribe to (state tree => reducer => state name )
    return {
      token: state.login.token,
    };
  });
  const signIn = () => {
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((result) => {
        localStorage.setItem("token", result.data);

        dispatch(setToken(result.data));
      })
      .catch((err) => {
        setMessage(err.response.data);
      });
  };
  const ResponseGoogle = (response) => {
    setToken(response.accessToken);
    localStorage.setItem("token", response.accessToken);
  };
  // const logOut = () => {
  //   localStorage.clear();
  //   localStorage.setItem()
  // }
  return (
    <div className="login">
      <h1>Login Page</h1>
      <table>
        <tr>
          <td>
            <label>Email</label>
          </td>
          <td>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr></tr>
        <tr>
          <td>
            <label>Password</label>
          </td>
          <td>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr></tr>
        <tr>
          <td></td>
          <td>
            <button onClick={signIn} className="button">
              Login
            </button>
            <div className='google' >
            <p > or </p>
        <GoogleLogin
          clientId="1018427859000-rr1mqigkk7fvghqfnh85ph78eru3lo8m.apps.googleusercontent.com"
          onSuccess={ResponseGoogle}
          onFailure={ResponseGoogle}
        />
      </div>
          </td>
        </tr>
        <p>{message}</p>
      <p>
        Sign Up for website <Link to="/register">Register</Link>
      </p>
 
      </table>
     
    </div>
  );
};
export default Login;
