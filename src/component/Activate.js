import React, { Component } from 'react'
import  {Alert}  from "react-bootstrap";
import axios from 'axios';


export default class Activate extends Component {
    state = { 
        successMessage:null,
        dangerMessage:null
    }

    param = window.location.search;
    componentDidMount(){
      axios 
            .get("tripella/user/active" +this.param)
            .then((response) => {
              console.log(response.data);
             this.setState({
              successMessage: response.data 
             })
            })
            .catch((error) => {
              console.log(error);
            });
      }
    
        
    render() {
        const successMessage = this.state.successMessage ?(
            <Alert variant="success">{this.state.successMessage}</Alert>): null;
          const dangerMessage = this.state.dangerMessage ? (
            <Alert variant="danger">{this.state.dangerMessage}</Alert>) : null;

        return (
            <div>
      {successMessage}
      {dangerMessage}
            </div>
        )
    }
}
