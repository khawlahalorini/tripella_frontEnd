import React, { Component } from 'react'
import '../App.css';
export default class TripList extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         trip: []
    //     }
    // }

    componentDidMount() {
        this.loadTripList();
    }

    loadTripList = () => {
        // axios.get("/tripella/tripList/index")
        // .then(response =>{
        //     console.log(response)
        //     this.setState({
        //         trip: response.data
        //     })
        // })
        // .catch(error =>{
        //     console.log("Error retreiving trip !!");
        //     console.log(error);
        // })
    }

    deleteTrip = (id) => {
        //     axios.delete(`/tripella/tripList/delete?id=${id}`, {
        //         // headers: {
        //         //     "Authorization": "Bearer " + localStorage.getItem("token")
        //         // }
        //     })
        //         .then(response => {
        //             console.log("Deleted!")
        //             const updatedTripList = [...this.state.trip];
        //             const index = updatedTripList.findIndex(x => x.id === id);

        //             if (index !== -1) {
        //                 updatedTripList.splice(index, 1)

        //                 this.setState({
        //                     trip: updatedTripList
        //                 })
        //             }
        // this.loadAuthorList();

        //         })
        //         .catch(error => {
        //             console.log("Error Deleting Author!")
        //             console.log(error)
        //         })
    }
    render() {


        return (

            <div class="w3-card-4" style={{ width: "40%", margin: "20px" }}>
                <header class="w3-container w3-light-grey">
                    <h2>Garden</h2>
                </header>
                <div class="w3-container"></div>
                <img src="https://www.onyamagazine.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-20-at-1.00.51-pm-1024x679.png" alt="Avatar" class="w3-left w3-round" width="30%" style={{ margin: "10px" }} />
                <p>large green garden in KSA</p>

                <h5>Date</h5> {" "}
                <h6>2021-02-21</h6>

                <h5>Time</h5> {" "}
                <h6>03:30:22 PM</h6>
                <div class="w3-container">
                    <button onClick={this.deleteTrip} class="w3-middle w3-large w3-circle w3-grey w3-right" style={{ marginBottom: "5px" }}>X</button>
                </div>
            </div>



        )
    }
}
