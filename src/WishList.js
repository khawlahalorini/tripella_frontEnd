import React from 'react'
import showPlaces from './AllPlaces'

function WishList (props){

  

  const  handleClick = (e)=> {
        e.stopPropagation()
        props.onFavetoggle()
      }
      const isFave = props.isFave ? 'remove_from_queue' : 'add_to_queue'
      const message = props.isFave ? "remove_from_queue" : "add_to_queue"

      return (
        <div onClick={handleClick} className={`place-row-fave ${isFave}`} >
            <p className="material-icons">{message}</p>
            {showPlaces}
        </div>

     )
}
export default WishList;