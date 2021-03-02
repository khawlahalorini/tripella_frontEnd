import React, { Component } from 'react'
import PlacesPIc from '../component/PlacesPIc'
import { BrowserRouter as Router, Route } from "react-router-dom";
import PlaceInfo from "../component/PlaceInfo.js";
import axios from "axios";
import { Nav, Button, ButtonToolbar } from 'react-bootstrap';
import PopupDet from './PopupDet'

import '../App.css';
export default class TripList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            trip: []
        }
    }

    componentDidMount() {
        this.loadTripList();
    }

    loadTripList = () => {
        axios.get("/tripella/trip/detail")
            .then(response => {
                console.log(response)
                this.setState({
                    trip: response.data
                })
            })
            .catch(error => {
                console.log("Error retreiving trip !!");
                console.log(error);
            })
    }

    deleteTrip = (id) => {
        axios.delete(`/tripella/trip/delete?id=${id}`,{
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
            .then(response => {
                console.log("Deleted!")


                this.loadAuthorList();

            })
            .catch(error => {
                console.log("Error Deleting Trip!")
                console.log(error)
            })
    }
    render() {


        return (

            <div class=" w3-panel w3-card-4 w3-margin w3-round-large" >
                <div class="w3-display-container ">
                    <img src="https://www.onyamagazine.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-20-at-1.00.51-pm-1024x679.png" alt="Avatar" class="w3-left w3-round w3-margin-right " width="25%" />
                    <h3 class=" w3-margin-top">{this.state.trip.name}</h3>
                    <hr />
                    <p>{this.state.trip.detail}</p>  {" "}

                    <p>Date:<span>{this.state.trip.start} - {this.state.trip.end}</span></p>
                    {/* time !! */}
                    <p>Time:<span>03:30:22 PM</span></p>

                    <button onClick={this.deleteTrip} class="w3-bottomright w3-button w3-xlarge w3-right 3w-black" >X</button>

                </div>
            </div>
            // <div class="w3-card-4" style={{ width: "40%", margin: "20px" }}>
            //     <header class="w3-container w3-light-grey">
            //         <h2>Garden</h2>
            //     </header>
            //     <div class="w3-container"></div>
            //     <img src="https://www.onyamagazine.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-20-at-1.00.51-pm-1024x679.png" alt="Avatar" class="w3-left w3-round" width="30%" style={{ margin: "10px" }} />
            //     <p>large green garden in KSA</p>

            //     <h5>Date</h5> {" "}
            //     <h6>2021-02-21</h6>

            //     <h5>Time</h5> {" "}
            //     <h6>03:30:22 PM</h6>
            //     <div class="w3-container">
            //         <button onClick={this.deleteTrip} class="w3-middle w3-large w3-circle w3-grey w3-right" style={{ marginBottom: "5px" }}>X</button>
            //     </div>
            // </div>



        )
    }
}
