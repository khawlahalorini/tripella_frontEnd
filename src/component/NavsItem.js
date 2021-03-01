import React, { Component } from 'react'
import loogo from '../img2/loogo.png';



export default class NavsItem extends Component {
    render() {
        return (
<div class="w3-bar ">
    <a class="w3-bar-item w3-button" href="/login">Login</a>
    <a class="w3-bar-item w3-button" href="/register">Register</a>
    <a class="w3-bar-item w3-button" href="/AllPlaces">All places</a>
    <a class="w3-bar-item w3-button" href="/home">Home</a>
</div>
        )
    }
}
