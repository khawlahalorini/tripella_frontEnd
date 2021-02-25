import React, { Component } from 'react'
import Login from '../user/Login.js';
import Register from '../user/Register.js'
import Home from '../component/Home.js'
import axios from "axios";
import TripList from '../component/TripList.js'
import WishList from '../component/WishList.js'
import Profile from '../user/Profile';
import DropdownButton from '../component/DropdownButton.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Nav,} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import AllPlaces from '../component/AllPlaces.js';
import AddPost from '../component/AddPost.js';


// import { Alert } from 'bootstrap';

export default class Navs extends Component {

  state = {
    user: null,
    filter: 'all'
    // successMessage:null,
    // dangerMessage:null,

  };
  // register 
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
      // login 
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
      //home
      homeHandler = (user) => {
        axios 
            .post("./component/Home.js", user)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
      };
      // all places
      allplacesHandler = (user) => {
        axios 
            .post("src/component/AllPlaces.js", user)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
      };
      // profile
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
    //trip list 
    TripListHandler = (user) =>{
      axios 
      .post("src/component/TripList.js", user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // wish list 
  WishListHandler = (user) =>{
    axios 
    .post("src/component/WishList.js", user)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
AddPostHandler = (user) =>{
  axios 
  .post("src/component/AddPost.js", user)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
};
// folter 

    render() {

      // const successMessage = this.state.successMessage ? (
      //   <Alert variant="success">{this.state.successMessage}</Alert>
      // ) : null;
      // const dangerMessage = this.state.dangerMessage ? (
      //   <Alert variant="danger">{this.state.dangerMessage}</Alert>
      // ) : null;
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
            component={() => <Home home={this.homeHandler} />}
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
            path="/allplaces"
            component={() => <AllPlaces onClick={this.allplacesHandler} />
            }
          ></Route>
          {/* dropdown list */}
          <Route
            path="/profile"
            component={() => <Profile profile={this.profileHandler} />}
          ></Route>            
          <Route
            path="/addPost"
            component={() => <AddPost addPost={this.AddPostHandler} />}
          ></Route>
            <Route
            path="/tripList"
            component={() => <TripList tripList={this.TripListHandler} />}
          ></Route>
          <Route
            path="/wishList"
            component={() => <WishList onClick={this.WishListHandler} />
            }
          ></Route> 
        </div>
    </Router>
        )
    }
}
