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
  componentDidMount() {
    axios.interceptors.request.use(req => {
        req.headers.authorization = "Bearer " + localStorage.getItem("token");
        return req;
      });
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

  addToWish = (place) =>{
    axios 
    .put("tripella/user/wishList" , place)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  deletePlace = (id) =>{
    axios 
    .delete(`tripella/post/delete?id=${id}`)
    .then((response) => {
      console.log(response);
       const updatedPlacesList = [...this.state.places];
       const index = updatedPlacesList.findIndex(x => x.id === id);
                if(index !== -1){
                  updatedPlacesList.splice(index, 1) 
                    this.setState({
                      places: updatedPlacesList
                    })
                }
    })
    .catch((error) => {
      console.log(error);
    })
  }

    render() {
      let ModalClose =() => this.setState({ModalShow: false});
      let InfoClose =() => this.setState({InfoShow:false})

        return (

<Router>
 
  <div className=" w3-panel w3-card-4 w3-margin w3-round-large w3-light-grey" >  
   <div className="w3-display-container ">
   {/* <button className="w3-bottomright w3-button w3-xlarge w3-right"onClick={ () => this.deletePlace(this.props.places.id)}>X</button> */}
    <PlacesPIc places={this.props.places} /> 
      <h3 className=" w3-margin-top">{this.props.places.title}</h3>
      <hr />
        <p>{this.props.places.description}  </p> 
        <Link to="/placeInfo">
        <p class="w3-opacity w3-tiny" onClick={() => this.setState({InfoShow: true})}>Read more..</p>	         	        
        </Link>  

       {this.props.isAuth ?(
         <div>
          <button className="w3-bottomright w3-button w3-xlarge w3-right"  style={{marginBottom:"10px"}}
        onClick={() => this.setState({ModalShow: true})}>+</button>
        <PopupDet 
        show={this.state.ModalShow}
        onHide={ModalClose} 
        postid={this.props.places.id}
        />
      <button className="w3-bottomright w3-button w3-xlarge w3-right 3w-black" onClick={this.addToWish}>
        <i className='fas fa-heart' aria-hidden="true">&#xf004;</i> </button>  
       </div> ): null }
      
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
