import React, { Component } from 'react'
import { Container, Form, Button ,Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class login extends Component {
    render() {
        return (
            <div>
                <Container>
                <Col>
                <Row>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" name="emailAddress"></Form.Control>
                    </Form.Group> 
                    </Row>
                    <Row>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password"></Form.Control>
                    </Form.Group>
                    </Row>
                    <Row>
                    <Button variant="primary">Login</Button>
                   </Row> 
                   </Col>
                </Container>
            </div>
        )
    }
}
