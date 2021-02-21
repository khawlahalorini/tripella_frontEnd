import React, { Component } from 'react'
import Login from './user/Login';
import Register from './user/Register'
import Home from './Home'
import axios from "axios";
import TripList from './TripList'
import Profile from './user/Profile';
import DropdownButton from './DropdownButton';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Nav,} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Navs extends Component {
    registerHandler = (user) => {
        axios 
            .post("./user/Register.js", user)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
      };
    loginHandler = (user) => {
        axios 
            .post("./user/Login.js", user)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
      };
      homeHandler = (user) => {
        axios 
            .post("./Home.js", user)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
      };
      profileHandler = (user) =>{
        axios 
        .post("./user/Peofile.js", user)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    TripListHandler = (user) =>{
      axios 
      .post("./user/TripList.js", user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
    render() {
        return (
    <Router>
    <div class="nav">
      <Nav variant="tabs">
  <Nav.Item>
    <Nav.Link href="/home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/register">Register</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/login">Login</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/allPlaces">All Places</Nav.Link>
  </Nav.Item>
  <DropdownButton  />
</Nav>

    </div>
    <div>
         <Route
            path="/home"
            component={() => <Home register={this.homeHandler} />}
          ></Route>
          <Route
            path="/register"
            component={() => <Register register={this.registerHandler} />}
          ></Route>
          <Route
            path="/login"
            component={() => <Login login={this.loginHandler} />
            }
          ></Route>
          <Route
            path="/profile"
            component={() => <Profile register={this.profileHandler} />}
          ></Route>
                    <Route
            path="/tripList"
            component={() => <TripList register={this.TripListHandler} />}
          ></Route>
        </div>
    </Router>
        )
    }
}
