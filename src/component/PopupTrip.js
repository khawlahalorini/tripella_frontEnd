import React, { Component } from 'react'
import {Modal, Button, Row, Col, Form} from 'react-bootstrap'

export default class Popup extends Component {

    
        state = {
        }
    tripHandler = () => {
      this.props.addTrip(this.state)
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
            <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name of your trip" name="name" onChange={this.changeHandler} />
                <Form.Label>Start Date</Form.Label>
                <Form.Control type="date" placeholder="Start Date" name="start" onChange={this.changeHandler} />
                <Form.Label>End Date</Form.Label>
                <Form.Control type="date" placeholder="End Date" name="end" onChange={this.changeHandler} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide} variant="light">Close</Button>
              <Button onClick={this.tripHandler} variant="light">Create</Button>
            </Modal.Footer>
          </Modal>
        );
    }
    
}
