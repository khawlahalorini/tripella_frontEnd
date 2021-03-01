import React, { Component } from 'react'
import  Alert  from "react-bootstrap";


export default class active extends Component {
    state = { 
        successMessage:null,
        dangerMessage:null
    }

    handler  = () => {
        axios 
            .post("tripella/user/active?email=" +param)
            .then((response) => {
              console.log(response.data);
             this.setState({
              successMessage: response.data 
             })
            })
            .catch((error) => {
              console.log(error);
            });
      };
    render() {

      var param = window.location.search;

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
