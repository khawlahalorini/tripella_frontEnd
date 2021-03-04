import React, { Component } from 'react'
import { Container, Form, Button , Alert} from 'react-bootstrap'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ResetPassword extends Component {
    state = {}
    
    param = window.location.search;
    resetPass = () => {
        axios  
        .post("tripella/user/resetpassword"+this.param+"&newPassword="+this.state.password)
        .then(response =>{
        this.setState({
                      massage: "Your password has been reset, login please",
                      variant: "success"})
        })
        .catch(error =>{
            this.setState({
                massage: "error..",
                variant:"warning"
            })
        })
    }

    changeHandler= (e) => {
        let temp = {...this.state}
        temp[e.target.name] = e.target.value;
        this.setState(temp)
    }

    render() {
        
        const {massage, variant} = this.state
        return (
            <div className="3w-container w3-content" >
            <div className=" w3-container w3-round-xxlarge w3-white w3-card-4 w3-margin" style={{width:"900px"}}>
                <Container>
                    <br />  {variant != null && <Alert variant={variant}>{massage}</Alert>}
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={this.changeHandler}></Form.Control>             
                        <Button variant="light" onClick={this.resetPass}>Reset</Button>

                    </Form.Group>
                </Container>
            </div>
            </div>
        )
    }
}
