import React, { Component } from 'react';
// import ProfileEditForm from './ProfileEditForm';
import ProfileEditForm from './ProfileEditForm';
import { Card ,ListGroupItem,ListGroup } from 'react-bootstrap'

// import axios from 'axios';

export default class Profile extends Component {

    render() {
        return (

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://psgpharma.ac.in/wp-content/uploads/2019/02/empty-img.jpg" />
            <Card.Body>
              <Card.Title>username</Card.Title>
              {/* <Card.Title>{this.state.username}</Card.Title> */}
              <Card.Text>Email</Card.Text>
              {/* <Card.Text>{this.state.emailAddress}</Card.Text> */}
              <Card.Text>Bio</Card.Text>
            </Card.Body>
          </Card>
            //     <div >
            //         <img src="https://psgpharma.ac.in/wp-content/uploads/2019/02/empty-img.jpg" alt=""/>
            //         <h1>username</h1>
            //         {/* <h1>{this.state.username}</h1> */}
            //         <h3>Email</h3>
            //         {/* <h3>{this.state.emailAddress}</h3> */}
            //     <h3>Bio</h3>
            //     {/* <ProfileEditForm/> */}
            // </div>

            
        )
    }
}
