import React, { Component } from 'react'
import { Container, Form, Button ,Row, Col} from 'react-bootstrap'

export default class ProfileEditForm extends Component {

    constructor(props){
        super(props);
        this.state ={
            newUser : props.user
        }
    }
    changeHandler= (e) => {
        let temp = {...this.state}
        temp[e.target.name] = e.target.value;
        this.setState(temp)
        console.log(this.state);
        

    }
    handleSubmit =(event) =>{
        event.preventDefault()
        this.props.editUser(this.state.newUser);
    }

    render() {
        return (
            <div className="3w-container w3-content" >
            <div className=" w3-container w3-round-xxlarge w3-white w3-card-4  w3-margin w3-row-padding" style={{width:"900px"}}>                
            <h1>hi</h1>
            {/* <Container onSubmit={this.handleSubmit}> */}
                    {/* <Form.Group >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="fristName"
                        value={this.state.newUser.fristName}
                        onChange={this.changeHandler}
                        ></Form.Control>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="lastName"
                        value={this.state.newUser.lastName}
                        onChange={this.changeHandler}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" name="emailAddress"
                        value={this.state.newUser.emailAddress}
                        onChange={this.changeHandler}
                        ></Form.Control>
                    </Form.Group> 
                    {/* <Row>
                        <Col> */}
                    {/* <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password"
                        value={this.state.newUser.password}
                        onChange={this.changeHandler}
                        ></Form.Control>
                    </Form.Group> */}
                    {/* </Col>
                    <Col>
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="password"
                        value={this.state.newUser.password}
                        onChange={this.changeHandler}
                        ></Form.Control>
                    </Form.Group> 
                    </Col>
                    </Row> */}
                    {/* <Form.Group>
            <Form.File
              className="position-relative"
              required
              name="file"
              label="File"
              id="validationFormik107"
              feedbackTooltip
              value={this.state.newUser.file}
            onChange={this.changeHandler}
            />
          </Form.Group> */}
                    {/* <Button variant="light" type="submit" value="Edit user">Save Edit</Button>
                </Container> */}
                </div>
                </div>
        )
    }
}