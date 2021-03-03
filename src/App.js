import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./component/Footer.js";
import Navs from './component/Navs';



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
      if (error+"" === "Error: Request failed with status code 403") {
        //TODO: redirect to login
      }
      return Promise.reject();
    });

    return (
      
    <div>

     <Navs />
   <Footer />

       </div>
    )
  }
}
