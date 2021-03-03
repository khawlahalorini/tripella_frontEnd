import axios from 'axios';
import React, { Component } from 'react'
import { Container, Form, Button , Modal} from 'react-bootstrap'


export default class ProfileEditForm extends Component {

    constructor(props){
        super(props);
        this.state ={
            newUser : props.user,
           
        }
    }
    changeHandler= (event) => {
        const attributeToChange = event.target.name
        const newValue = event.target.value
        const updatedUser = {...this.state.newUser}
        updatedUser[attributeToChange] = newValue
        console.log(updatedUser)
        this.setState({
            newUser: updatedUser
        })
        
    }
    chcngePass = () => {
        axios
        .put("tripella/user/chengepassword" , this.state.newUser )
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }
    handleSubmit =(event) =>{
        event.preventDefault()
        this.props.editUser(this.state.newUser);
        this.chcngePass()
    }


    render() {

        return (
        <div className="3w-container w3-content" >
            <div className=" w3-container w3-round-xxlarge w3-white w3-card-4  w3-margin w3-row-padding" style={{width:"900px"}}>   
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
                         
            <Container> 
            <br />
                     <Form.Group >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="firstName"
                        value={this.state.newUser.firstName}
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
                    <Form.Group>
                        <Form.Label>old Password</Form.Label>
                        <Form.Control type="password" name="oldPassword"
                        onChange={this.changeHandler}
                        ></Form.Control>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label>new Password</Form.Label>
                        <Form.Control type="password" name="newPassword"
                        onChange={this.changeHandler}
                        ></Form.Control>
                    </Form.Group> 
            
                    <Form.Group>
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
          </Form.Group> 
                    <Button variant="light" type="submit" value="Edit user"  onClick={this.handleSubmit}>Save Edit</Button>{" "}
                    <Button variant="light" onClick={this.props.onHide}>cancel</Button>

                </Container>
                </Modal>
                </div>
                </div>
                
        )
    }
}