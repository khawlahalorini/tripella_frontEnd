import React, { Component } from 'react'
import pic from './img2/pic.jpg';

export default class PlacesPIc extends Component {
    render() {
        return (
            
            <img src={pic} alt="Avatar" class="w3-left" width="30%" style={{ margin: "10px"}}/>

// <img src={`${this.props.places.poster_path}`} alt="" />
        )
    }
}
