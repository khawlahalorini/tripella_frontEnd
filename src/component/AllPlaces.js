import React, { Component } from 'react'
import 'w3-css/w3.css'
import PlaceDet from './PlaceDet';
import ARRAY from '../ARRAY'

export default class AllPlaces extends Component {
    render() {
        const allPlace = ARRAY.places.map((item, index) => {
            return <PlaceDet places={item} key={index} />
        })
        return (
           
                <div>
                    {allPlace}
                </div>
              
        )
    }
}
