import React, { Component } from 'react'
import loogo from '../img2/loogo.png';
import DropdownButton from '../component/DropdownButton.js';



export default class NavsItem extends Component {
    state = {}
    logoutHandler = () => {
        this.props.logout(this.state);
    }
  
    render() {

        return (
           
            <div class="w3-bar w3-white">
            {this.props.isAuth ? (
                <div>
                <a class="w3-bar-item w3-button" href="/home">Home</a>
                <a class="w3-bar-item w3-button" href="/allplaces">All places</a>
                <a class="w3-bar-item w3-button" href="/login" onClick={this.logoutHandler}>Logout</a>
                
                </div>
              ) : (
              <div>
                   <a class="w3-bar-item w3-button" href="/home">Home</a>
                   <a class="w3-bar-item w3-button" href="/allplaces">All places</a>
                   <a class="w3-bar-item w3-button" href="/register">Register</a>
                   <a class="w3-bar-item w3-button" href="/login">Login</a>


                
              </div>
              )}   
             
            </div>
        )
    }
}
