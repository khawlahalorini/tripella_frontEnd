import React, { Component } from 'react'
import Login from '../user/Login.js';
import Register from '../user/Register.js'
import Home from '../component/Home.js'
import axios from "axios";
import loogo from '../img2/loogo.png';
import TripList from '../component/TripList.js'
import WishList from '../component/WishList.js'
import Profile from '../user/Profile';
import DropdownButton from '../component/DropdownButton.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AllPlaces from '../component/AllPlaces.js';
import AddPost from '../component/AddPost.js';
import { decode } from "jsonwebtoken";
import { Alert } from "react-bootstrap";
import NavsItem from './NavsItem.js';

export default class Navs extends Component {

  state = {
    user: null,
    successMessage:null,
    dangerMessage:null

  };

  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token != null) {
      let user = decode(token);
      if (user) {
        
        axios.interceptors.request.use(req => {
          req.headers.authorization = "Bearer " + localStorage.getItem("token");
          return req;
        });
        
        this.setState({
          user: user
        });
      } else if (!user) {
        localStorage.removeItem("token");
        axios.interceptors.request.use(req => {
          req.headers.authorization = "";
          return req;
        });
        this.setState({
        });
      }
    }
  }
  // register 
    registerHandler = (userData) => {
        axios 
            .post("tripella/user/register", userData)
            .then((response) => {
              console.log(response.data);
             this.setState({
              successMessage: response.data 
             })
            })
            .catch((error) => {
              console.log(error);
              this.setState({
                dangerMessage: error.data
              })
            });
        // axios
        //     .post("tripella/user/photo")
        //     .then((response) => {
        //       console.log(response);
        //     })
        //     .catch((error) => {
        //       console.log(error);
        //     });
      };
      // login 
    loginHandler = (userData) => {
        axios 
            .post("tripella/user/authenticate", userData)
            .then((response) => {
              if (response.data.token != null) {
                localStorage.setItem("token", response.data.token);
                let user = decode(response.data.token);
                console.log(response.data.token);
                this.setState({
                  user: user,
                  successMessage: "Successfully logged in!!!"
                });
              } else {
                this.setState({
                  user: null, 
                  dangerMessage:"uaername or password not corect"
                });
              }
            })
            .catch((error) => {
              console.log(error);
              this.setState({
              });
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
    //   // profile
    //   profileHandler = (user) =>{
    //     axios 
    //     .post("./user/Peofile.js", user)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };
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
//AddPost
AddPostHandler = (post) =>{
  console.log(post);
  axios 

  .post("tripella/post/add", post)
  .then((response) => {
    console.log(response);
    this.setState({
          successMessage: response.data.title + " has been added"
    })
  })
  .catch((error) => {
    console.log(error);

  });
};
// folter 
  
    render() {
      const token = localStorage.getItem("token")
      const successMessage = this.state.successMessage ?(
        <Alert variant="success">{this.state.successMessage}</Alert>): null;
      const dangerMessage = this.state.dangerMessage ? (
        <Alert variant="danger">{this.state.dangerMessage}</Alert>) : null;
        return (
    <Router>
    
    <div class="w3-display-container w3-white"> 
    <a  class="w3-left w3-section" href="/home">
    <img src={loogo} alt="logo" style={{width:"80%"}}/>
  </a>
  
     <DropdownButton class="w3-display-left w3-container w3-xlarge" />    

     <div  class="w3-left w3-large w3-section">
     <NavsItem  /></div>
</div>
      {successMessage}
      {dangerMessage}
    <div>
    <Route
            path="/"
            component={() => <Home />}
          ></Route>
         <Route
            path="/home"
            component={() => <Home />}
          ></Route>
          <Route
            path="/register"
            component={() => <Register register={this.registerHandler} />}
          ></Route>
          <Route
            path="/login"
            component={() => <Login login={this.loginHandler} />}
          ></Route>
          <Route
            path="/allplaces"
            component={() => <AllPlaces />}
          ></Route>
          <Route
            path="/profile"
            component={() => <Profile/>}
          ></Route>
          <Route
            path="/tripList"
            component={() => <TripList />}
          ></Route>
          <Route
            path="/AddPost"
            component={() => <AddPost addPost={this.AddPostHandler} />}
          ></Route>
          <Route
            path="/wishList"
            component={() => <WishList wishList={this.WishListHandler} />
            }
          ></Route> 
          
        </div>
    </Router>
        )
    }
}
   