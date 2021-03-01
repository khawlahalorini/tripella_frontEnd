import React, { Component } from 'react'
import { Container, Form, Button ,Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class login extends Component {
    state={

    }
     
    registerHandler = () => {
        this.props.register(this.state)
    }
    changeHandler= (e) => {
        let temp = {...this.state}
        temp[e.target.name] = e.target.value;
        this.setState(temp)
    }
    render() {
        return (
            <div>
                <Container>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="firstName" onChange={this.changeHandler}></Form.Control>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="lastName" onChange={this.changeHandler}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" name="emailAddress" onChange={this.changeHandler}></Form.Control>
                    </Form.Group> 
                    <Row>
                        <Col>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={this.changeHandler}></Form.Control>
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={this.changeHandler}></Form.Control>
                    </Form.Group> 
                    </Col>
                    </Row>
                    <Form.Group>
            <Form.File
              className="position-relative"
              required
              name="photoFile"
              label="File"
              id="validationFormik107"
              feedbackTooltip
            />
          </Form.Group>
          <Button variant="light" onClick={this.registerHandler}>Register</Button>
                </Container>
                </div>
        )
    }
}
