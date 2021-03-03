import React, { Component } from 'react'

export default class Trip extends Component {
    render() {
        return (
            <div>
                      <button onClick={ () => this.props.deleteTrip(this.props.trip.id)} class="w3-bottomright w3-button w3-tiny w3-xlarge w3-right 3w-black" >yes</button>
                <p class="w3-bottomright w3-tiny w3-xlarge w3-right 3w-black"> Are you sure? </p>

</div> 
        )      
    }
    }
