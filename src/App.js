import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./component/Footer.js";
import Navs from './component/Navs';
import axios from 'axios'
import Login from './user/Login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



export default class App extends Component {



  
  render() {

    axios.interceptors.request.use(req => {
      req.baseURL="http://localhost:8080/"
      return req;
    });

    axios.interceptors.response.use(function (response) {
      //do something with response data
      return response;
    }, function (error) {
      //do something with error
      // if (error+"" === "Error: Request failed with status code 403") {
      //   //TODO: redirect to login
      //   window.location.href = "/login";
      //   console.log("FORBIDDEN 403")
      // }
      return Promise.reject(error);
    });

    return (
      
    <div>

     <Navs />
   <Footer />

       </div>
    )
  }
}
