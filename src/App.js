import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import Navs from './Navs';
import ARRAY from './ARRAY';



export default class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     places: ARRAY.places,
  //     faves: [],
  //     current: {}
  //   }
  // }

  // handleFaveToggle = (place) => {

  //   const faves = [...this.state.faves];
  //   const placeIndex = faves.indexOf(place)

  //   if (placeIndex !== -1) {
  //     faves.splice(placeIndex, 1);
  //     console.log(`Removing ${place.title} From Favors`)
  //   } else {
  //     faves.push(place);
  //     console.log(`Adding ${place.title} To Favors`)
  //   }
  //   this.setState({ faves })
  // }


  
  render() {
    return (
    <div class="body">

      {/* <Navs  handleDetailsClick={this.handleDetailsClick} films={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle} /> */}
     
    <Navs />

    </div>
    )
  }
}
