import React, { Component } from 'react'
import 'w3-css/w3.css'
import PlaceDet from './PlaceDet';
import ARRAY from '../ARRAY'
import axios from "axios";

export default class AllPlaces extends Component {
state={
    allplaces:[]
}

 // all places
 allplacesHandler =() => {
    axios 
        .get("tripella/post/all")

        .then((response) => {
          console.log(response.data);
          this.setState({
            allplaces: response.data
          })
        })
        .catch((error) => {
          console.log(error);
        });
  };
componentDidMount(){
    this.allplacesHandler()
}
    render() {
        const allPlace = this.state.allplaces.map((item, index) => {
            return <PlaceDet isAuth ={ this.props.isAuth }  places={item} key={index} />
      })
         return (
           
              <div>
                   {allPlace}
                </div>
              
        )
    }
}
