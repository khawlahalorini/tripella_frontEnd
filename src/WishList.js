import React, { Component } from 'react'

export default class WishList extends Component {
    constructor(props){
        super(props)
        this.state = {
          isFave: false
        }
      }
    
      handleClick = (e)=> {
        e.stopPropagation()
        console.log("click")
        this.setState({isFave: !this.state.isFave})
      }
    render() {
        const isFave = this.state.isFave ? 'remove_from_queue' : 'add_to_queue'
        return (
           <div className={`place-row-fave ${isFave}`} onClick={this.handleClick}>

           </div>

        )
    }
}
