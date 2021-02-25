import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

export default class ProfileEditForm extends Component {

    render() {
        return (
            <div>
                <Form
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
                </Form>

            </div>
        )
    }
}