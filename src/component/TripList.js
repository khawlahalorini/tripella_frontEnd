import React, { Component } from 'react'
import PlacesPIc from '../component/PlacesPIc'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PlaceInfo from "../component/PlaceInfo.js";
import axios from "axios";
import { Nav, Button, ButtonToolbar} from 'react-bootstrap';
import PopupTrip from './PopupTrip'
import Trip from './Trip'

import '../App.css';
import TripDet from './TripDet';
export default class TripList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ModalShow: false, 
            trips: [],
            clickedTrip: null,
            detailView: false 
        }
    }

    componentDidMount() {
        this.loadTripList();
    }

    loadTripList = () => {
        axios.get("tripella/user/triplist")
        .then(response =>{
            console.log(response.data)
            this.setState({
                trips: response.data
            })
            console.log(this.state.trips)
        })
        .catch(error =>{
            console.log("Error retreiving trip !!");
            console.log(error);
        })
    }

    addTrip = (trip) => {

        console.log(trip);
        axios.post("tripella/trip/add", trip)
        .then(response =>{
            console.log(response)
            this.setState({
                trips: response.data
            })
            this.loadTripList();
        })
        .catch(error =>{
            console.log("Error !!");
            console.log(error);
        })
    }

    deleteTrip = (id) => {
            axios.delete(`tripella/trip/delete?id=${id}`)
                .then(response => {
                    console.log("Deleted!")
                    const updatedTripList = [...this.state.trip];
                    const index = updatedTripList.findIndex(x => x.id === id);

                    if (index !== -1) {
                        updatedTripList.splice(index, 1)

                        this.setState({
                            trip: updatedTripList
                        })
                    }
                    this.loadTripList();

                })
                .catch(error => {
                    console.log("Error Deleting trip!")
                    console.log(error)
                })
    }


    loadDetailTrip = (id) => {
        axios.get(`tripella/detail/trip?id=${id}`)
        .then(response =>{
            console.log(response.data)
            this.setState({
                trips: response.data
            })
            console.log(this.state.trips)
        })
        .catch(error =>{
            console.log("Error retreiving trip !!");
            console.log(error);
        })
    }

    render() {
    //     const allTrips= this.state.trip.map((item, index) => {
    //         <div places={item} key={index} />
    //   })
      let ModalClose =() => this.setState({ModalShow: false});

        return (



            <div >
                <div className="w3-container">
        <button class="w3-button w3-xlargew3-panel w3-card-4 w3-round-large  w3-right w3-white"  style={{marginBottom:"10px ",}}
        onClick={() => this.setState({ModalShow: true})}>New Trip</button>
        <PopupTrip addTrip={this.addTrip}
        show={this.state.ModalShow}
        onHide={ModalClose}
        /> </div>
        <Router>
            <div className="w3-container">
                <ul>
                   {this.state.trips.map((trip, index) => 
                   <li key={index} >
                            <div class=" w3-panel w3-card-4 w3-margin w3-round-large w3-light-grey" >  
            <div class="w3-display-container ">
            <img src="https://www.onyamagazine.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-20-at-1.00.51-pm-1024x679.png" alt="Avatar" class="w3-left w3-round w3-margin-right " width="25%"/>
      <h3 class=" w3-margin-top">{trip.id}</h3>
      <hr/>

        <p>Start Date:<span>{trip.start}</span></p>
        <p>End Date:<span>{trip.end}</span></p>
                        <Link to='/tripdet'>
   <button color='primary' onClick={()=> this.setState({detailView: ! this.state.detailView, clickedTrip: trip})} >trip Detail</button>
</Link>
<Link to='/trip'>
   <button color='primary' onClick={()=> this.setState({detailView: ! this.state.detailView, clickedTrip: trip})} >X</button>
</Link>
<Route
            path="/tripdet"
            component={() => this.state.detailView && this.state.clickedTrip.id == trip.id ? <TripDet trip={this.state.clickedTrip} detailTrip={this.loadDetailTrip}  /> : null }
          ></Route>
          <Route
            path="/trip"
            component={() => this.state.detailView && this.state.clickedTrip.id == trip.id ? <Trip trip={this.state.clickedTrip} deleteTrip={this.deleteTrip}  /> : null }
          ></Route>
                   </div>
                   </div>
                   </li>
                    )}
               </ul>
               </div>
            </Router>
  </div>



        )
    }
}
