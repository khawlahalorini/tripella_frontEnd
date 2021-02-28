import React, { Component } from 'react'
import  Alert  from "react-bootstrap";


export default class ActivePage extends Component {
    state = { 
        successMessage:null,
        dangerMessage:null
    }

    handler  = (userData) => {
        axios 
            .post("tripella/user/active?email=", userData)
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
