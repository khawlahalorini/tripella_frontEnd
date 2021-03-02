import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./component/Footer.js";
import Navs from './component/Navs';



export default class App extends Component {



  
  render() {
    return (
      
    <div >

     <Navs />
   <Footer />

       </div>
    )
  }
}
