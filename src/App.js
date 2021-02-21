import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import Navs from './Navs';
import Profile from './user/Profile';
import Home from './Home';



export default class App extends Component {
  state = {
    user: null
  };

  render() {
    return (
    <div class="body">
      <Navs />
    </div>
    )
  }
}
