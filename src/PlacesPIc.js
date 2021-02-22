import React, { Component } from 'react'

export default class PlacesPIc extends Component {
    render() {
        return (
            <img src={`${this.props.places.pic}`} alt="" />

        )
    }
}
