import React from "react";
import Axios from "axios";
import "./main.css";
import { Link, Route } from "react-router-dom";
import Navigation from "../navigation/index";
import Login from "./../auth/login/index";
import SignUp from "./../auth/signUp/index";
import HomePage from "../homePage";
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
  return (
    <>
      <Navigation />
      <div className="Main">
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/Register" render={() => <SignUp />} />
        <Route exact path="/" render={() => <HomePage />}/>
        {/* <Route exact path="/Register" render={() => <Category />} /> 
        <Route exact path="/Register" render={() => <Authors />} />  */}
      </div>
    </>
  );
};

export default Main;