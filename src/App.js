import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./component/Footer.js";
import Navs from './component/Navs';



export default class App extends Component {



  
  render() {
    return (
      
    <div class="body">

      {/* <Navs  handleDetailsClick={this.handleDetailsClick} films={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle} /> */}
     <Navs />
   <Footer />

       </div>
    )
  }
}
