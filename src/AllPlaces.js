import React, { Component } from 'react'
import 'w3-css/w3.css'
import PlaceDet from './PlaceDet';
import ARRAY from './ARRAY'

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
        const allPlace = places.map((place) => <FilmRow key={place.id} plaec={place} isFave={faves.includes(place)} onFaveToggle={() => this.props.onFaveToggle(place)}  handleDetailsClick ={this.props.handleDetailsClick}/>)
        const favesFilms = places.map((place) => <FilmRow key={place.id} film={place} isFave={faves.includes(place)} onFaveToggle={() => this.props.onFaveToggle(place)} handleDetailsClick ={this.props.handleDetailsClick}/>)
        this.state.filters === "all" ? showPlaces = allFilms : showPlaces = favesFilms

        return (
           
                <div>
                    {allPlace}
                </div>
              
        )
    }
}
