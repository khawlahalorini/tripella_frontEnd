import React, { Component } from 'react'
import PlacesPIc from './PlacesPIc'


export default class PlaceDet extends Component {
    render() {
        return (
            <div className="cards">
            <div className="card__conrent">
                <h2>{this.props.places.title}</h2>
            <PlacesPIc className="card__image" places={this.props.places} />
            <p>{this.props.places.overview}</p>
            </div>
            </div>
        )
    }
}
