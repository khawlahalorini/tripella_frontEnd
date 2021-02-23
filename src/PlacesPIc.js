import React, { Component } from 'react'
import pic from './img2/pic.jpg';

export default class PlacesPIc extends Component {
    render() {
        return (

            
            <img src={pic} alt="Avatar" class="w3-left w3-round" width="30%" style={{ margin: "10px"}}/>
            // <img src={`https://${this.props.places.pic}`} alt="" />


// <img src={`${this.props.places.poster_path}`} alt="" />
        )
    }
}
