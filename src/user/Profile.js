import React, { Component } from 'react';
// import ProfileEditForm from './ProfileEditForm';
// import axios from 'axios';

export default class Profile extends Component {

    render() {
        return (
            <div>
                <img src="https://psgpharma.ac.in/wp-content/uploads/2019/02/empty-img.jpg" alt=""/>
                <h1>username</h1>
                {/* <h1>{this.state.username}</h1> */}
                <h3>Email</h3>
                {/* <h3>{this.state.emailAddress}</h3> */}
                <h3>Bio</h3>
                {/* <ProfileEditForm/> */}
            </div>
        )
    }
}
