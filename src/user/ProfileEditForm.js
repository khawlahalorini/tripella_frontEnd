import React, { Component } from 'react'
import { Container, Form, Button ,Row, Col} from 'react-bootstrap'

export default class ProfileEditForm extends Component {

    constructor(props){
        super(props);
        this.state ={
            newUser : props.user
        }
    }
    handleChange= (event) =>{
        const attributeToChange = event.target.name
        const newValue = event.target.value
        const updatedUser = {...this.state.newUser}
        updatedUser[attributeToChange] = newValue
        console.log(updatedUser)
        this.setState({
            newUser: updatedUser
        })
    }
    handleSubmit =(event) =>{
        event.preventDefault()
        this.props.editAuthor(this.state.newUser);
    }

    render() {
        return (
            <div>
                <Container onSubmit={this.handleSubmit}>
                    <Form.Group >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="fristName"
                        value={this.state.newUser.fristName}
                        onChange={this.handleChange}
                        ></Form.Control>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="lastName"
                        value={this.state.newUser.lastName}
                        onChange={this.handleChange}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" name="emailAddress"
                        value={this.state.newUser.emailAddress}
                        onChange={this.handleChange}
                        ></Form.Control>
                    </Form.Group> 
                    <Row>
                        <Col>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password"
                        value={this.state.newUser.password}
                        onChange={this.handleChange}
                        ></Form.Control>
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="password"
                        value={this.state.newUser.password}
                        onChange={this.handleChange}
                        ></Form.Control>
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
              value={this.state.newUser.file}
            onChange={this.handleChange}
            />
          </Form.Group>
                    <Button variant="light" type="submit" value="Edit user">Save Edit</Button>
                </Container>
                </div>
        )
    }
}