import React, { Component } from 'react'
import { Container, Form, Button ,Row, Col} from 'react-bootstrap'


export default class AddPost extends Component {
    render() {
        return (
            <div>
            <Container>
                <Row>
                    <Col>
                <Form.Group>
                    <Form.Label>Choose Type</Form.Label>
                    <Form.Control as="select" name="type">
                    <option>Restaurants</option>
                    <option>Parks</option>
                    <option>Amusement Park</option>
                    <option>Markets</option>
                    </Form.Control>
                </Form.Group>
                 </Col>
                 <Col>
                <Form.Group>
                    <Form.Label>Place Name</Form.Label>
                    <Form.Control type="text" name="name"></Form.Control>
                </Form.Group> 
               </Col> 
               </Row>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="textarea" name="description"></Form.Control>
                </Form.Group> 
                <Form.Group>
                    <Form.Label>information</Form.Label>
                    <Form.Control type="text" name="information"></Form.Control>
                </Form.Group> 
                <Row>
                    <Col>
                <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" name="country"></Form.Control>
                </Form.Group>
                </Col>
                 <Col>
                <Form.Group>
                    <Form.Label>city</Form.Label>
                    <Form.Control type="text" name="city"></Form.Control>
                </Form.Group>
                </Col> 
               </Row>
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
                <Button variant="light">Add</Button>
            </Container>
            </div>
        )
    }
}
