import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import Navs from './Navs';
import ARRAY from './ARRAY';



export default class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        place: ARRAY.places,
        faves: [],
        current: {},
        user: null,
      }
     }

     handleFaveToggle = (plaec) => {
     const faves = [...this.state.faves];
        const placeIndex = faves.indexOf(plaec)
    
        if (placeIndex !== -1) {
          faves.splice(placeIndex, 1);
          console.log(`Removing ${plaec.title} From Favors`)
        } else {
          faves.push(plaec);
          console.log(`Adding ${plaec.title} To Favors`)
        }
        this.setState({ faves })
      }


  
  render() {
    return (
    <div class="body">
      <Navs />
     
    
    </div>
    )
  }
}
