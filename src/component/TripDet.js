import React, { Component } from 'react'
import axios from "axios";

export default class TripDet extends Component {

    state={
        details: []
    }
    componentDidMount() {
        this.detail(this.props.trip.id);
    }
    detail = (trip) => {
        console.log(trip)
        axios.get(`tripella/detail/trip?id=${trip}`)
        .then(response =>{
            console.log(response)

            this.setState({
                details : response.data
            })
        })
        .catch(error =>{
            console.log("Error retreiving detail !!");
            console.log(error);
        })
    }


    render() {
        return (
            <div>
                {this.props.detailTrip(this.props.id)}
                   {this.state.details.map((detail, index) => 
                   <div key={index} > {detail} </div>)}
            </div>
        )
    }
}
