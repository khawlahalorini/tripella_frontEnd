import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import Navs from './Navs';
import ARRAY from './ARRAY';



export default class App extends Component {



  
  render() {
    return (
    <div class="body">

      {/* <Navs  handleDetailsClick={this.handleDetailsClick} films={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle} /> */}
     <Navs />
   

    </div>
    )
  }
}
