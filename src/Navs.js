import React, { Component } from 'react'
import Login from './user/Login';
import Register from './user/Register'
import Home from './Home'
import axios from "axios";
import TripList from './TripList'
import WishList from './WishList'
import Profile from './user/Profile';
import DropdownButton from './DropdownButton';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Nav,} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import AllPlaces from './AllPlaces';
import AddPost from './AddPost';


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
            .post("./Home.js", user)
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
            .post("./allPlaces.js", user)
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
      .post("./TripList.js", user)
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
    .post("./WishList.js", user)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
AddPostHandler = (user) =>{
  axios 
  .post("./AddPost.js", user)
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
