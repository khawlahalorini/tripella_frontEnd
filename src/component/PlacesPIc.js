import React, { Component } from 'react'

export default class PlacesPIc extends Component {
    render() {
        return (

            
            <img src={this.props.places} alt="Avatar" class="w3-left w3-round w3-margin-right " width="25%" />
        )
    }
}
