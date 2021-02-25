import React, { Component } from 'react'
import Slider from './Slider'
import ARRAY from "../ARRAY";
import HomeCard from './HomeCard';

export default class home extends Component {


    
    render() {

        const homeCard = ARRAY.places.slice(0, 4).map((item, index) => {
            return <HomeCard places={item} key={index} />})

        return (
            <div>
                <Slider />
                {homeCard}
            </div>
        )
    }
}
