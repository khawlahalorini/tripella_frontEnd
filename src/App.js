import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import Navs from './Navs';

export default class App extends Component {
  state = {
    user: null
  };

  
  render() {
    return (
    <div>
      <Navs />
    </div>
    )
  }
}
