import React, { Component } from 'react'
import {Modal} from 'react-bootstrap'


export default class PlaceInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            
             <div class=" w3-panel w3-card-4 w3-margin w3-round-large w3-light-grey" >  
            <div class="w3-display-container ">
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
           
                    <header class="w3-container ">
                        <h3>{this.props.place.title}</h3>
                        </header>
                        <div className="w3-display-container ">{this.props.place.poster_path}</div> 
                        <div className="w3-row">
                        <div class="w3-panel w3-col l10 s6 w3-light-grey w3-twothird ">
                            <p >{this.props.place.description}</p>
                            <p className="w3-small">{this.props.place.information}</p>
                            </div>
                            <div className="  w3-card-4 w3-round-large w3-panel w3-col l2 s6 w3-white w3-third  " style={{width:"200px"}}>
                                <p>{this.props.place.country}, {this.props.place.city}</p>
                            </div>
                            </div>
                            <div class="w3-container">
                                <button 
                                class="w3-button w3-small w3-circle w3-grey w3-right"  
                                style={{marginBottom:"10px"}}
                                onClick={this.props.onHide}
                                >Close</button>
                            </div>
                        
            

            </Modal>            
            </div>
            </div>
        )
    }
}
