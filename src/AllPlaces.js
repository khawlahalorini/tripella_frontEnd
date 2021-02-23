import React, { Component } from 'react'
import 'w3-css/w3.css'
import PlaceDet from './PlaceDet';
import ARRAY from './ARRAY'
import PlacesPIc from './PlacesPIc';

export default class AllPlaces extends Component {
    constructor(props){
        super(props)
        this.state = {
            filters: "all"
        }   
    }

    handleFilterClick(filter){
        this.setState({
            filters: filter
        });
    }

    render() {
        const { places, faves} = this.props;
        let showPlaces = [];
        const allPlaces = places.map((place) => <PlaceDet key={place.id} place={place} isFave={faves.includes(place)} onFaveToggle={() => this.props.onFaveToggle(place)}  handleDetailsClick ={this.props.handleDetailsClick}/>)
        const favesPlaces = faves.map((place) => <PlaceDet key={place.id} film={place} isFave={faves.includes(place)} onFaveToggle={() => this.props.onFaveToggle(place)} handleDetailsClick ={this.props.handleDetailsClick}/>)
        this.state.filters === "all" ? showPlaces = allPlaces : showPlaces = favesPlaces
        return (
           
                <div>
                    {favesPlaces}
                </div>
              
        )
    }
}
