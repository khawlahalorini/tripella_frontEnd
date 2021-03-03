import React, { Component } from 'react'
import axios from "axios";

export default class TripDet extends Component {

    state={
        trip: this.props.trip
    }
    componentDidMount() {
        this.detail(12);
    }
    detail = (trip) => {
        console.log(trip)
        axios.get("tripella/detail/trip", {params :{trip}}, { headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        } })
        .then(response =>{
            console.log(response)
        })
        .catch(error =>{
            console.log("Error retreiving trip !!");
            console.log(error);
        })
    }
    render() {
        return (
            <div>
                 <div class=" w3-panel w3-card-4 w3-margin w3-round-large w3-light-grey" >  
            <div class="w3-display-container ">
      <img src="https://www.onyamagazine.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-20-at-1.00.51-pm-1024x679.png" alt="Avatar" class="w3-left w3-round w3-margin-right " width="25%"/>


        <button onClick={this.deleteTrip} class="w3-bottomright w3-button w3-xlarge w3-right 3w-black" >X</button>

  </div>
  </div>
            </div>
        )
    }
}
