import React, { Component } from 'react'

import axios from 'axios';
import WishDet from './WishDet';
import PlaceDet from './PlaceDet';

export default class WishList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      wishes: []
    }
  }

  componentDidMount() {
    axios.interceptors.request.use(req => {
      req.headers.authorization = "Bearer " + localStorage.getItem("token");
      return req;
    });

    this.loadwishList();
  }

  loadwishList = () => {
    axios.get("/tripella/user/wishlist")
      .then(response => {
        console.log(response)
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
    const WishList = this.state.wishes.map((wish, index) => {
      return <WishDet wish={wish} key={index} />
    })
    return (
      <div >
        {WishList}
      </div>

    )
  }
}
