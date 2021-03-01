import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from '../user/Profile';


export default class DropdownButton extends Component {

    render() {
        return (
            <Router>

            <div class="w3-dropdown-hover">
                <button class="w3-button w3-xlarge  w3-white">☰</button>
                <div class="w3-dropdown-content w3-bar-block w3-border">
                <a href="/profile" class="w3-bar-item w3-button">Profile</a>
                <a href="addPost" class="w3-bar-item w3-button">Add Place</a>
                <a href="tripList" class="w3-bar-item w3-button">Trip List</a>
                <a href="wishList" class="w3-bar-item w3-button "><i class='fas fa-heart'/>Wish List</a>
                </div>
            </div>
        
         </Router>
        )
    }
}
