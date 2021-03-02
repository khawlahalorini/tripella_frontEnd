import React, { Component } from 'react'
import { Container, Form, Button ,Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default class login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            input: {},
            errors: {}
        }
    }
     
    registerHandler = () => {  
        this.props.register(this.state);
    }
    changeHandler= (e) => {
        let temp = {...this.state}
        temp[e.target.name] = e.target.value;
        this.setState(temp)
        // this.confirem();          
        console.log(this.state);

    }
    // confirem() {
    //     let input = this.state.input;
    //     let errors = {};
    //     let isValid = true;
    //     if (typeof this.state.password !== "undefined" && typeof this.state.confirm_password !== "undefined") {

    //         if ( this.state.password != this.state.confirm_password) {
    //           isValid = false;
    //           errors["password"] = "Passwords don't match.";
    //         }
    //       } 
    //       this.setState({
    //         errors: errors
    //       });
    //       return isValid;
    // }
    render() {
        return (
            <div className="3w-display-container" >
            <div className=" w3-container w3-round-xxlarge w3-white w3-card-4 w3-display-middle w3-margin" style={{width:"900px"}}>
                <Container>
                    <Form.Group>
                        <br />
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
                    {/* <Row> */}
                        {/* <Col> */}
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={this.changeHandler}></Form.Control>
                    </Form.Group>
                    {/* </Col> */}
                    {/* <Col>
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                        type="password" 
                        name="confirm_password" 
                        onChange={this.changeHandler}>
                        </Form.Control>
                    </Form.Group>                         
                    <div className="text-danger">{this.state.errors.confirm_password}</div>
                    </Col> */}
                    {/* </Row> */}
                    <Form.Group>
            {/* <Form.File
              className="position-relative"
              required
              name="photoFile"
              label="File"
              id="validationFormik107"
              feedbackTooltip
              onChange={this.changeHandler}
            /> */}          
            <Button variant="light" onClick={this.registerHandler}>Register</Button>
          </Form.Group>
                </Container>
                </div> 
                </div>
        )
    }
}
