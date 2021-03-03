import React, { Component } from 'react'
import PlacesPIc from '../component/PlacesPIc.js'

export default class WishDet extends Component {
    render() {
        return (


            <div class=" w3-panel w3-card-4 w3-margin w3-round-large w3-light-grey" >
                <div class="w3-display-container ">
                    <PlacesPIc places={this.props.wish} />
                    <h3 class=" w3-margin-top">{this.props.wish.title}</h3>
                    <hr />
                    <p>{this.props.places.description}</p>


                        <button class="w3-bottomright w3-button w3-xlarge w3-right" style={{ marginBottom: "10px" }}
                            onClick={() => this.setState({ ModalShow: true })}>+</button>
                  
             
                </div>
           </div>
          
        )
    }
}
