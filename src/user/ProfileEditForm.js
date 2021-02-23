import React, { Component } from 'react'
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap'

export default class ProfileEditForm extends Component {

    render() {
        return (
            <div>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://psgpharma.ac.in/wp-content/uploads/2019/02/empty-img.jpg" />
                    <Card.Body>
                        <Card.Title>username</Card.Title>
                        {/* <Card.Title>{this.state.username}</Card.Title> */}
                        <Card.Text>Email</Card.Text>
                        {/* <Card.Text>{this.state.emailAddress}</Card.Text> */}
                        <Card.Text>Bio</Card.Text>
                    </Card.Body>
                </Card>
                {/* <form
                //  onSubmit={this.handleSubmit}
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
                    {/* <div>
                        <Form.File
                            className="position-relative"
                            required
                            name="file"
                            label="File"
                            id="validationFormik107"
                            feedbackTooltip
                        />
                    </div> */}
                {/* <div>
                        <input type="submit" value="Save"></input>
                    </div>
                </form> */}

            </div>
        )
    }
}