import React, { Component } from 'react'
import PlacesPIc from './PlacesPIc'


export default class PlaceDet extends Component {
    render() {
        return (
        

            <div class="w3-card-4" style={{width:"40%" , margin:"20px"}}>
    <header class="w3-container w3-light-grey">
      <h3>{this.props.places.title}</h3>
    </header>
    <div class="w3-container">
      
      <PlacesPIc places={this.props.places} /> 
      <p>{this.props.places.overview}</p>
    </div>
    <button class="w3-button w3-block w3-dark-grey">Add to your trip </button>
  </div>

            
        )
    }
}
