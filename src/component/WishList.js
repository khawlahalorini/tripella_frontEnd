import React, { Component } from 'react'

import axios from 'axios';
import WishDet from './WishDet';
import PlaceDet from './PlaceDet';

export default class WishList extends Component {
state = {
      wishes: []
    }

  componentDidMount() {
    this.loadwishList();
  }

  loadwishList = () => {
    axios.get("/tripella/user/wishlist")
      .then(response => {
        console.log(response.data)
        this.setState({
          wishes: response.data

        })
      })
      .catch(error => {
        console.log("Error retreiving Wishes !!");
        console.log(error);
      })
  }

  //   deleteWish= (id) =>{
  //     axios.delete(`/tripella/user/wishlist/delete?id=${id}`,{
  //         headers: {
  //             "Authorization": "Bearer " + localStorage.getItem("token")
  //         }
  //     })
  //         .then(response =>{
  //             console.log("Deleted!")

  //             this.loadWishList();
  //         })
  //         .catch(error =>{
  //             console.log("Error Deleting wish!")
  //             console.log(error)
  //         })
  // }
  render() {

    console.log(this.state.wishes.data);
    const WishList = this.state.wishes.map((wish, index) => {
      return <WishDet wish={wish} key={index} />
    })
    return (
      <div >
            <h1>Wish List:</h1>
        {WishList}
      </div>

    )
  }
}
