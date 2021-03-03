import React, { Component } from 'react'
import { Container, Form, Button ,Row, Col} from 'react-bootstrap'



export default class AddPost extends Component {
    state={

    }
     
    postHandler = () => {
        this.setState({type: document.getElementsByName('type')[0].value})
        this.props.addPost(this.state)
    }
    changeHandler= (e) => {
        let temp = {...this.state}
        temp[e.target.name] = e.target.value;
        this.setState(temp)
        console.log(this.state)
    }
    render() {
        return (
            <div className="3w-container w3-content" >
            <div className=" w3-container w3-round-xxlarge w3-white w3-card-4  w3-margin w3-row-padding" style={{width:"900px"}}>            <Container>
                <Row>
                    <Col>
                    <br />
                <Form.Group>
                    <Form.Label>Choose Type</Form.Label>
                    <Form.Control as="select" name="type">
                    <option>Restaurants</option>
                    <option>Parks</option>
                    <option>Amusement Park</option>
                    <option>Markets</option>
                    </Form.Control>
                </Form.Group>
                 </Col>
                 <Col>
                 <br />
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
        <br />
        <Button variant="light" onClick={this.postHandler}>Add</Button>
      </Form.Group>
            </Container>
            </div>
            </div>
        )
    }
}

