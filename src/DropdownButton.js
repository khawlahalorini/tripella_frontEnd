import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from './user/Profile';


export default class DropdownButton extends Component {

    profileHandler = (user) =>{
        axios 
        .post("./user/Login.js", user)
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
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                         ☰
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div>
         <Route
            path="/profile"
            component={() => <Profile register={this.profileHandler} />}
          ></Route>
          {/* <Route
            path="/register"
            component={() => <Register register={this.registerHandler} />}
          ></Route>
          <Route
            path="/login"
            component={() => <Login login={this.loginHandler} />
            }
          ></Route> */}
        </div>
         </Router>
        )
    }
}
