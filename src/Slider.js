import React, { Component } from 'react'
import "./App.css";
import {Carousel} from 'react-bootstrap'
import img1 from './img2/img1.png';
import img2 from './img2/img2.jpg';
import img5 from './img2/img5.jpg';

export default class Slider extends Component {
    render() {
        return (
            <div class="slider">
            <Carousel>
                <Carousel.Item>
                     <img
                     className="d-block w-100"
                     src= {img1}
                     alt="First slide"/>
                     <Carousel.Caption>
                         <h3>Family places</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"/>
                    <Carousel.Caption>
                        <h3>around the world</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img5}
                    alt="Third slide"/>
                    <Carousel.Caption>
                        <h3>Adventures with friends</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        )
    }
}
