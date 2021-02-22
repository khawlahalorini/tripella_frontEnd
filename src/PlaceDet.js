import React, { Component } from 'react'
import PlacesPIc from './PlacesPIc'


export default class PlaceDet extends Component {
    render() {
        return (


                <div class="row">
                    <div class="col-lg-5" style={{width:"50%"}} >
                    <div class="w3-container">


                        <div class="w3-card-4" style={{ margin: "10px"}}>
                            <header class="w3-container w3-light-grey">
                                <h3>{this.props.places.title}</h3>
                            </header>
                            <div class="w3-container">
                                <PlacesPIc places={this.props.places} />
                              
                                <p class="w3-center">{this.props.places.overview}</p>
                                {/* {this.props.places.poster_path} */}
                            </div>
                            <button class="w3-button w3-block w3-dark-grey">Add</button>
                        </div>

                        {/* <button type="button" class="btn btn-default">
      <span class="glyphicon glyphicon-heart"></span>
    </button> */}
                        {/* <i class="bi bi-heart"></i> */}

                    </div>
                </div>
                </div>


        )
    }
}
