import React, { Component } from 'react'
import { Container, Form, Button ,Row, Col} from 'react-bootstrap'
import axios from 'axios';
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
    forgotPass = () => {
        axios
        .put("tripella/user/forgotpassword?email=" + this.state.emailAddress)
        .then(response =>{
            console.log(response.data)
        })
        .catch(error =>{
            console.log(error);
        })
    }
    render() {
        return (
            <div className="3w-container w3-content" >
            <div className=" w3-container w3-round-xxlarge w3-white w3-card-4 w3-margin" style={{width:"900px"}}>
                <Container>
                    <br /> 
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" name="emailAddress" onChange={this.changeHandler}></Form.Control>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={this.changeHandler}></Form.Control>    
                        <span className="w3-small" onClick={this.forgotPass}>forgot password?</span>       
                        <br />          
                        <Button variant="light" onClick={this.loginHandler}>Login</Button>

                    </Form.Group>
                </Container>
            </div>
            </div>
        )
    }
}
