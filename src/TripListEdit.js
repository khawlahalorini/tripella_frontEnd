import React, { Component } from 'react'

export default class TripListEdit extends Component {
    render() {
        return (
            <form
            //  onSubmit={this.handleSubmit}
            >
                <div>
                    <label>Date</label>
                    <input
                        name="date"
                        type="date"
                    // value={this.state.value}
                    // onChange={this.handleChange}
                    ></input>
                </div>
                <div>
                    <label>Time</label>
                    <input
                        name="time"
                        type="time"
                    // onChange={this.handleChange}
                    ></input>
                </div>

                <div>
                    <input type="submit" value="Save"></input>
                </div>
            </form>

        )
    }
}
