import React, { Component } from 'react'
import PlaceDet from './PlaceDet';
import ARRAY from '../ARRAY'
import axios from 'axios';

export default class WishList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       wishes:[],
       clickedUserId:''

    }
  }
  
      componentDidMount(){
        this.loadwishList();
    }

    loadwishList = (id) => {
        axios.get("/tripella/user/wishlist")
        .then(response =>{
            console.log(response)
            this.setState({
              wishes: response.data,
              clickedUserId: id

            })
        })
        .catch(error =>{
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
        return <PlaceDet {...wish} key={index} />
    })
        return (
           <div >
             {WishList}
           </div>

        )
    }
}
