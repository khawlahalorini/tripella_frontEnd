import React, { Component } from 'react'
import loogo from '../img2/loogo.png';

export default class PlacesPIc extends Component {
    render() {
        return (
            <div>
                {this.props.places.photo? (<img src={this.props.places.photo} alt="Avatar" class="w3-left w3-round w3-margin-right " width="25%" />) 
            : (<img src={loogo} alt="Avatar" class="w3-left w3-round w3-margin-right " width="25%" />)} 
            </div>
        )
    }
}
