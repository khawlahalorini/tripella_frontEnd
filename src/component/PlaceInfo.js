import React, { Component } from 'react'
import PlacesPIc from '../component/PlacesPIc'


export default class PlaceInfo extends Component {
    render() {
        return (
            <div>
                <div class="w3-card-4" style={{width:"40%" , margin:"20px"}}>
                    <header class="w3-container w3-light-grey">

                        <h3>{this.props.place.title}</h3>
                        </header>
                        <div class="w3-container">
                            <PlacesPIc places={this.props.place} /> 
                            <p>{this.props.place.overview}</p>
                            <div class="w3-container">
                                <button class="w3-button w3-xlarge w3-circle w3-grey w3-right"  style={{marginBottom:"10px"}}>+</button>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}
