import React, { Component } from 'react'
import { Container, Form, Button ,Row, Col} from 'react-bootstrap'



export default class AddPost extends Component {
    state={

    }
     
    postHandler = () => {
        this.props.addPost(this.state)
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
                <Row>
                    <Col>
                <Form.Group>
                    <Form.Label>Choose Type</Form.Label>
                    <Form.Control as="select" name="type">
                    <option>Restaurants</option>
                    <option>Parks</option>
                    <option>Amusement Park</option>
                    <option>Markets</option>
                    onChange={this.changeHandler} </Form.Control>
                </Form.Group>
                 </Col>
                 <Col>
                <Form.Group>
                    <Form.Label>Place Name</Form.Label>
                    <Form.Control type="text" name="title" onChange={this.changeHandler}></Form.Control>
                </Form.Group> 
               </Col> 
               </Row>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="textarea" name="description" onChange={this.changeHandler} ></Form.Control>
                </Form.Group> 
                <Form.Group>
                    <Form.Label>information</Form.Label>
                    <Form.Control type="text" name="information" onChange={this.changeHandler}></Form.Control>
                </Form.Group> 
                <Row>
                    <Col>
                <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" name="country" onChange={this.changeHandler}></Form.Control>
                </Form.Group>
                </Col>
                 <Col>
                <Form.Group>
                    <Form.Label>city</Form.Label>
                    <Form.Control type="text" name="city" onChange={this.changeHandler}></Form.Control>
                </Form.Group>
                </Col> 
               </Row>
                <Form.Group>
        <Form.File onChange={this.changeHandler}
          className="position-relative"
          required
          name="file"
          label="File"
          id="validationFormik107"
          feedbackTooltip
        />
      </Form.Group>
                <Button variant="light" onClick={this.postHandler}>Add</Button>
            </Container>
            </div>
        )
    }
}

