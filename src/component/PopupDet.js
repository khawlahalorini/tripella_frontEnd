import React, { Component } from 'react'
import {Modal, Button, Row, Col, Form} from 'react-bootstrap'
import axios from 'axios';

export default class Popup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             post_id: this.props.postid
        }
    }
    
    componentDidMount() {
      this.loadTripListForUser();
  }
   tripArray = [];
  loadTripListForUser = () => {
      axios.get("tripella/user/triplist")
      .then(response =>{
          console.log(response.data)
         this.tripArray = response.data
      })
      .catch(error =>{
          console.log("Error retreiving trip !!");
          console.log(error);
      })
  }

  addDetail = (detail) => {
    axios.post("tripella/detail/add", detail)
    .then(response =>{
        console.log(response.data)
        this.setState({
            trips: response.data
        })
    })
    .catch(error =>{
        console.log(" !!");
        console.log(error);
    })
  }

  tripHandler = () => {
console.log(this.state);

    this.addDetail(this.state)
}
changeHandler= (e) => {
    console.log("trip");
    let temp = {...this.state}
    temp[e.target.name] = e.target.value;
    temp["post_id"] = this.props.postid
    this.setState(temp)
}
  

    render() {
        return (
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Body>
            <Form.Group>
                    <Form.Label>Choose Trip</Form.Label>
                    <Form.Control as="select" name="trip_id" onChange={this.changeHandler}>
                    { this.tripArray.map((item, index) => 
                     <option key={index} value={item.id} >{item.name}</option> ) }
                     <option >KKKK</option>
                     <option >MMMM</option>
                     <option  >PPPP</option>
                    </Form.Control>
                </Form.Group>
                <Form.Label>Add Date</Form.Label>
                <Form.Control type="date" placeholder="add date" name="dateTime" onChange={this.changeHandler}/>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide} variant="light">Close</Button>
              <Button variant="light" onClick={this.tripHandler}>Add </Button>
            </Modal.Footer>
          </Modal>
        );
    }
    
}
