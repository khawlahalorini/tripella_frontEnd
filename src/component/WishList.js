import React, { Component } from 'react'
import PlaceDet from './PlaceDet';
import ARRAY from '../ARRAY'

export default class WishList extends Component {
    constructor(props){
        super(props)
      }
    
    render() {

      const WishList = ARRAY.places.map((item, index) => {
        return <PlaceDet places={item} key={index} />
    })
        return (
           <div >
             {WishList}
           </div>

        )
    }
}
