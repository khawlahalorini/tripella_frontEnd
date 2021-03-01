import React, { Component } from 'react'
import { Container, Form, Button ,Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class login extends Component {
    state = {}
    loginHandler = () => {
        this.props.login(this.state);
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
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" name="emailAddress" onChange={this.changeHandler}></Form.Control>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={this.changeHandler}></Form.Control>
                    </Form.Group>
                    <Button variant="light" onClick={this.loginHandler}>Login</Button>
                </Container>
            </div>
        )
    }
}
