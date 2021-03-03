import React, { Component } from 'react'
import PlacesPIc from '../component/PlacesPIc'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PlaceInfo from "../component/PlaceInfo.js";
import axios from "axios";
import PopupDet from './PopupDet'
import '../App.css'






export default class PlaceDet extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       ModalShow: false, 
       InfoShow:false
    }
  }
  
  placeInfoHandler = (user) => {
    axios 
        .post("src/component/PlaceInfo.js", user)
        .then((response) => {
          console.log(response);

        })
        .catch((error) => {
          console.log(error);
        });
  };

    render() {
      let ModalClose =() => this.setState({ModalShow: false});
      let InfoClose =() => this.setState({InfoShow:false})

        return (

<Router>
 
  <div className=" w3-panel w3-card-4 w3-margin w3-round-large w3-light-grey" >  
   <div className="w3-display-container ">
    <PlacesPIc places={this.props.places} /> 
      <h3 className=" w3-margin-top">{this.props.places.title}</h3>
      <hr />
        <p>{this.props.places.description}  
        <Link to="/placeInfo">
        <p class="w3-opacity w3-tiny" onClick={() => this.setState({InfoShow: true})}>Read more..</p>	         	        
        </Link></p>   

        <button className="w3-bottomright w3-button w3-xlarge w3-right"  style={{marginBottom:"10px"}}
        onClick={() => this.setState({ModalShow: true})}>+</button>
        <PopupDet 
        show={this.state.ModalShow}
        onHide={ModalClose} 
        postId={this.props.places.id}
        />
      <button className="w3-bottomright w3-button w3-xlarge w3-right 3w-black">
        <span className='fas fa-heart' aria-hidden="true">&#xf004;</span> </button>  
  </div>
  </div>
  <div>
    <Route
    path="/placeInfo"
    component={() => <PlaceInfo 
                 onClick={this.placeInfoHandler} 
                 place={this.props.places} 
                 show={this.state.InfoShow}
                 onHide={InfoClose}
    />}
    ></Route>
  </div>
</Router>
            
        )
    }
}
