import React, { Component } from 'react'
import { Container, Form, Button ,Row, Col} from 'react-bootstrap'


export default class AddPost extends Component {
    render() {
        return (
            <div>
            <Container>
            <Col>
            <Row>
                <Form.Group>
                    <Form.Label>Choose Type</Form.Label>
                    <Form.Control as="select" name="type">
                    <option>Restaurants</option>
                    <option>Parks</option>
                    <option>Amusement Park</option>
                    <option>Markets</option>
                    </Form.Control>
                </Form.Group> 
                </Row>
                <Row>
                <Form.Group>
                    <Form.Label>Place Name</Form.Label>
                    <Form.Control type="text" name="name"></Form.Control>
                </Form.Group> 
                </Row>
                <Row>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="textarea" name="description"></Form.Control>
                </Form.Group> 
                </Row>
                <Row>
                <Form.Group>
                    <Form.Label>information</Form.Label>
                    <Form.Control type="text" name="information"></Form.Control>
                </Form.Group> 
                </Row>
                <Row>
                <Form.Group>
                    <Form.Label>location</Form.Label>
                    <Form.Control type="text" name="loction"></Form.Control>
                </Form.Group>
                </Row>
                <Row>
                <Form.Group>
        <Form.File
          className="position-relative"
          required
          name="file"
          label="File"
          id="validationFormik107"
          feedbackTooltip
        />
      </Form.Group>
                </Row>
                <Row>
                <Button variant="light">Add</Button>
               </Row> 
               </Col>
            </Container>
            </div>
        )
    }
}
