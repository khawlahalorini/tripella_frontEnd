import React, { Component } from 'react'
import { Container, Form, Button ,Row, Col} from 'react-bootstrap'

export default class ProfileEditForm extends Component {

    render() {
        return (
            <div>

              
               {/* <form
                 onSubmit={this.handleSubmit}
                >
                    <div>
                        <label>Bio</label>
                        <input
                            name="name"
                            type="text"
                        // value={this.state.value}
                        // onChange={this.handleChange}
                        ></input>
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            name="emailAddress"
                            type="text"
                        // onChange={this.handleChange}
                        ></input>
                    </div>
                    <div>
                        <Form.File
                            className="position-relative"
                            required
                            name="file"
                            label="File"
                            id="validationFormik107"
                            feedbackTooltip
                        />
                    </div> 
                 <div>
                        <input type="submit" value="Save"></input>
                    </div>
                </form> 

            </div> */}
                <Container>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="fristName"></Form.Control>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="lastName"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" name="emailAddress"></Form.Control>
                    </Form.Group> 
                    <Row>
                        <Col>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password"></Form.Control>
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="password"></Form.Control>
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
                    <Button variant="light">Register</Button>
                </Container>
                </div>
        )
    }
}