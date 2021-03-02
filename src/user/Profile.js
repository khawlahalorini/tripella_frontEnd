import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import { Nav } from 'react-bootstrap';
import ProfileEditForm from "../user/ProfileEditForm.js";
import { decode } from "jsonwebtoken";

export default class Profile extends Component {

  constructor(props) {
    super(props)
    this.state = {
       user:null,
       userData:[],
       ModalShow: false
    }

  }


  
  profileEditHandler = (user) => {
    axios 
        .post("tripella/user/update", user, { headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
      } })
        .then((response) => {
          console.log(response);
          this.setState({
            userData:response.data
          })
        })
        .catch((error) => {
          console.log(error);
        });
  };

  profileHandler = () => {
    axios 
        .get("tripella/user/detail", { headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
      } })
        .then((response) => {
          console.log(response);
          this.setState({
            userData:response.data
          })

        })
        .catch((error) => {
          console.log(error);
        });
  };

  componentDidMount() {

  let token = localStorage.getItem("token");
  if (token != null) {
    let user = decode(token);
    this.profileHandler()
    if (user) {
      console.log(user);
      this.setState({
        user: user,
      });
    } else if (!user) {
      localStorage.removeItem("token");
      this.setState({
      });
    }
  }
}

  render() {

    let ModalClose =() => this.setState({ModalShow: false});
    return (
      
      <div className="3w-container w3-content" >
      <div className=" w3-container w3-round-xxlarge w3-white w3-card-4  w3-margin w3-row-padding" style={{width:"900px"}}>
          <div class="w3-container w3-center">
            <img src="data:image/jpeg;base64,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" alt="Avatar" style={{ width: "20%", marginTop: "20px" }} class="w3-circle" />
            <br />
            <br />
            
        <h2>{this.state.userData.firstName} {this.state.userData.lastName}</h2>
            <h2>{this.state.user ? this.state.user.sub : null}</h2> 
            
            <br />
            <p>Bio</p>
            <br />
            <Router>
            <Link to='/profileeditform'>
   <button color='primary' onClick={() => this.setState({ModalShow: true})}>Edit Profile</button>

</Link>
            <Route
            path="/profileeditform"
            component={() => <ProfileEditForm user={this.state.userData} editUser={this.profileEditHandler} show={this.state.ModalShow}
        onHide={ModalClose}/>}
          ></Route>
            </Router>
          </div>

        </div>
      </div>

      
      // {/* //   <Card style={{ width: '18rem' }}>
      //   <Card.Img variant="top" src="https://psgpharma.ac.in/wp-content/uploads/2019/02/empty-img.jpg" />
      //   <Card.Body>
      //     <Card.Title>username</Card.Title>
      //     {/* <Card.Title>{this.state.username}</Card.Title> */}
      //     <Card.Text>Email</Card.Text>
      //     {/* <Card.Text>{this.state.emailAddress}</Card.Text> */}
      //     <Card.Text>Bio</Card.Text>
      //   </Card.Body>
      // </Card> */}

      // // {/* <div class="card" style={{width:"400px"}}>
      // <img class="card-img-top" src="img_avatar1.png" alt="Card image" style={{width:"100%"}} />
      // <div class="card-body">
      //   <h4 class="card-title">John Doe</h4>
      //   <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      //   <a href="#" class="btn btn-primary stretched-link">Edit Profile</a>
      // </div>
      // </div> */}





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
