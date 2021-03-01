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
 
  <div class=" w3-panel w3-card-4 w3-margin w3-round-large" >  
   <div class="w3-display-container ">
    <PlacesPIc places={this.props.places} /> 
      <h3 class=" w3-margin-top">{this.props.places.title}</h3>
      <hr/>
        <p>{this.props.places.overview}<Nav.Link href="/placeInfo">
        <p class="w3-opacity w3-tiny">Read more..</p>
        </Nav.Link> </p>    
        
      <button class="w3-bottomright w3-button w3-xlarge w3-right"  style={{marginBottom:"10px"}}>+</button>
      <button class="w3-bottomright w3-button w3-xlarge w3-right 3w-black">
        <span class='fas fa-heart' >&#xf004;</span> </button>  
  </div>
  </div>
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
