import React, { Component } from 'react'
import axios from "axios";
import PlaceDet from './PlaceDet';

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
            console.log(response.data)

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
        const alldetail = this.state.details.map((detail, index) => {
            return <PlaceDet  places={detail.post} key={index} />})
        console.log(this.state.details[0]);
        return (
            <div>
                   {alldetail}
            </div>
        )
    }
}
