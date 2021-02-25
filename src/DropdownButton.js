import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from './user/Profile';


export default class DropdownButton extends Component {

    render() {
        return (
            <Router>
            <div class="dropdown">
                <Dropdown>
                    <Dropdown.Toggle variant="link" id="dropdown-basic" class="">
                         ☰
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                        <Dropdown.Item href="addPost">Add Place</Dropdown.Item>
                        <Dropdown.Item href="tripList">Trip List</Dropdown.Item>
                        <Dropdown.Item href="wishList">Wish List</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div>



        </div>
         </Router>
        )
    }
}
