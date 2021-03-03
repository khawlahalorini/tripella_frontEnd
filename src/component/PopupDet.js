import React, { Component } from 'react'
import {Modal, Button, Row, Col, Form} from 'react-bootstrap'
import axios from 'axios';

export default class Popup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             trips: []
        }
    }
    
    componentDidMount() {
      axios.interceptors.request.use(req => {
          req.headers.authorization = "Bearer " + localStorage.getItem("token");
          return req;
        });
      this.loadTripList();
  }

  loadTripList = () => {
      axios.get("tripella/user/triplist")
      .then(response =>{
          console.log(response.data)
          this.setState({
              trips: response.data
          })
      })
      .catch(error =>{
          console.log("Error retreiving trip !!");
          console.log(error);
      })
  }

  addDetail = (detail) => {
    console.log(detail)
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
    this.addDetail(this.state)
}
changeHandler= (e) => {
    let temp = {...this.state}
    temp[e.target.name] = e.target.value;
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
                    { this.state.trips.map((item, index) => {
                      <option key={index}>{item}</option> }) }
                    </Form.Control>
                </Form.Group>
                <Form.Label>Add Date</Form.Label>
                <Form.Control type="date" placeholder="add date" name="dateTime" onChange={this.changeHandler}/>
                <Form.Label>Add Time</Form.Label>
                <Form.Control type="time" placeholder="add time" />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide} variant="light">Close</Button>
              <Button variant="light" onClick={this.tripHandler}>Add </Button>
            </Modal.Footer>
          </Modal>
        );
    }
    
}
