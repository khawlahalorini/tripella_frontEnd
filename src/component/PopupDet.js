import React, { Component } from 'react'
import {Modal, Button, Row, Col, Form} from 'react-bootstrap'

export default class Popup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
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
                <Form.Label>Add Date</Form.Label>
                <Form.Control type="date" placeholder="Enter email" />
                <Form.Label>Add Time</Form.Label>
                <Form.Control type="time" placeholder="Enter email" />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide} variant="light">Close</Button>
              <Button variant="light">Add </Button>
            </Modal.Footer>
          </Modal>
        );
    }
    
}
