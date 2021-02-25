import React, { Component } from 'react'
import PlacesPIc from '../component/PlacesPIc'
import { BrowserRouter as Router, Route } from "react-router-dom";
import PlaceInfo from "../component/PlaceInfo.js";
import axios from "axios";
import { Nav } from 'react-bootstrap';






export default class PlaceDet extends Component {
  placeInfoHandler = (user) => {
    axios 
        .post("src/component/PlaceInfo.js", user)
        .then((response) => {
          console.log(response);

        })
        .catch((error) => {
          console.log(error);
        });
  };

    render() {
        return (
        
<Router>
  <Nav.Link href="/placeInfo">
            <div class="w3-card-4" style={{width:"40%" , margin:"20px"}} >
    <header class="w3-container w3-light-grey">
      <h3>{this.props.places.title}</h3>
    </header>
    <div class="w3-container">
      
      <PlacesPIc places={this.props.places} /> 
      <p>{this.props.places.overview}</p>
<div class="w3-container">
  
<button class="w3-button w3-xlarge w3-circle w3-grey w3-right"  style={{marginBottom:"10px"}}>+</button>
{/* or */}
{/* <button class="w3-button w3-block w3-dark-grey">Add to your trip </button> */}

</div>
    </div>
    {/* <button class="w3-button w3-xlarge w3-circle w3-yellow black">
    <span class="fa fa-heart" aria-hidden="true"></span> 
    </button> */}
    
    
  </div></Nav.Link>
  <div>
  <Route
            path="/placeInfo"
            component={() => <PlaceInfo onClick={this.placeInfoHandler} />}
          ></Route>
  </div>
</Router>
            
        )
    }
}
