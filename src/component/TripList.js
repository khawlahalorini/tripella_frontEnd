import React, { Component } from 'react'
import PlacesPIc from '../component/PlacesPIc'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PlaceInfo from "../component/PlaceInfo.js";
import axios from "axios";
import { Nav, Button, ButtonToolbar} from 'react-bootstrap';
import PopupTrip from './PopupTrip'


import '../App.css';
import TripDet from './TripDet';
export default class TripList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ModalShow: false, 
            trips: []
        }
    }

    componentDidMount() {
        this.loadTripList();
    }

    loadTripList = () => {
        axios.get("tripella/user/triplist",  { headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        } })
        .then(response =>{
            console.log(response.data)
            this.setState({
                trips: response.data
            })
        })
        .catch(error =>{
            console.log("Error retreiving trip !!");
            console.log(error);
        })
    }

    addTrip = (trip) => {
        axios.post("tripella/trip/add", trip, { headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        } })
        .then(response =>{
            console.log(response)
            this.setState({
                trips: response.data
            })
        })
        .catch(error =>{
            console.log("Error !!");
            console.log(error);
        })
    }

    deleteTrip = (id) => {
            axios.delete(`/tripella/tripList/delete?id=${id}`, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })
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
        this.loadAuthorList();

                })
                .catch(error => {
                    console.log("Error Deleting trip!")
                    console.log(error)
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
                   <div key={index} >
                            <div class=" w3-panel w3-card-4 w3-margin w3-round-large w3-light-grey" >  
            <div class="w3-display-container ">
            <img src="https://www.onyamagazine.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-20-at-1.00.51-pm-1024x679.png" alt="Avatar" class="w3-left w3-round w3-margin-right " width="25%"/>
      <h3 class=" w3-margin-top">{trip.name}</h3>
      <hr/>

        <p>Start Date:<span>{trip.start}</span></p>
        <p>End Date:<span>{trip.end}</span></p>
                        <Link to='/tripdet'>
   <button color='primary' >trip Detail</button>
</Link>
<Route
            path="/tripdet"
            component={() => <TripDet trip={trip}/>}
          ></Route>
                        <button onClick={this.deleteTrip} class="w3-bottomright w3-button w3-xlarge w3-right 3w-black" >X</button>
                   </div>
                   </div>
                   </div>
                    )}
               </ul>
               </div>
            </Router>
  </div>



        )
    }
}
