import React, { Component } from 'react'

export default class TripDet extends Component {
    render() {
        return (
            <div>
                 <div class=" w3-panel w3-card-4 w3-margin w3-round-large w3-light-grey" >  
            <div class="w3-display-container ">
      <img src="https://www.onyamagazine.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-20-at-1.00.51-pm-1024x679.png" alt="Avatar" class="w3-left w3-round w3-margin-right " width="25%"/>
      <h3 class=" w3-margin-top">Garden</h3>
      <hr/>
        <p>large green garden in KSA </p>  {" "} 

        <p>Date:<span>2021-02-21</span></p>
        <p>Time:<span>03:30:22 PM</span></p>
       
        <button onClick={this.deleteTrip} class="w3-bottomright w3-button w3-xlarge w3-right 3w-black" >X</button>

  </div>
  </div>
            </div>
        )
    }
}
