import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from '../user/Profile';
import Navs from './Navs';
import NavsItem from './NavsItem';
import loogo from '../img2/loogo.png';


export default class DropdownButton extends Component {
    state = {}
    logoutHandler = () => {
        this.props.logout(this.state);
    }

    render() {
        return (
            <Router>
                <div class="w3-bar w3-white">
                    <a class="w3-left w3-section" href="/home">
                        <img src={loogo} alt="logo" style={{ width: "80%" }} />
                    </a>
                    {this.props.isAuth ? (
                        <div>

                            <div class="w3-left w3-large w3-section">
                                <NavsItem logout={this.logoutHandler} isAuth={this.props.isAuth} />
                            </div>

                            <div class="w3-dropdown-hover w3-section w3-white">

                                <button class="w3-button w3-xlarge  w3-white">☰</button>
                                <div class="w3-dropdown-content w3-bar-block w3-border">
                                    <a href="profile" class="w3-bar-item w3-button">Profile</a>
                                    <a href="addPost" class="w3-bar-item w3-button">Add Place</a>
                                    <a href="tripList" class="w3-bar-item w3-button">Trip List</a>
                                    <a href="wishList" class="w3-bar-item w3-button "><i class='fas fa-heart' />Wish List</a>
                                </div>
                            </div>
                        </div>

                    ) : (
                            <div>

                                <div class="w3-left w3-large w3-section">
                                    <NavsItem logout={this.logoutHandler} isAuth={this.props.isAuth} />
                                </div>


                            </div>
                        )}

                </div>
            </Router>
        )
    }
}
