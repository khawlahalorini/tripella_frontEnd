import React, { Component } from 'react'
import '../App.css';


export default class HomeCard extends Component {
    render() {


        return (



            <div class="w3-card-4 w3-margin w3-col w3-white w3-round-large" style={{width:"22.5%"}}>
                <div class="w3-display-container w3-text-white ">
                    <img src={this.props.places.poster_path}  alt="Lights" style={{width:"100%"}} />
                    <div class="w3-xlarge w3-display-bottomleft w3-padding">{this.props.places.title}</div>
                </div>
                    <div class=" w3-center ">
                        <p>{this.props.places.overview}</p>
                    </div>
            </div>
        )
    }
}
