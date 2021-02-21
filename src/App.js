import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import Navs from './Navs';
import TripList from './TripList';


export default class App extends Component {
  state = {
    user: null
  };

  
  render() {
    return (
    <div class="body">
      {/* <Navs /> */}
      <TripList/>
    </div>
    )
  }
}
