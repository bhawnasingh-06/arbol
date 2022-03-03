import React from 'react'
import { Carousel } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import slider1 from "../assets/slider1.jpg"
import slider2 from "../assets/slider2.jpg"
import slider3 from "../assets/slider3.jpg"
const Slider = () => {
    return (
        <div className="shadow mb-4 bg-white rounded">
            <Carousel>
                <Carousel.Item interval={2000} style={{
                    height: "600px", background:
                        `linear-gradient(to top, rgba(0,0,0,1),  rgba(0.1,0.1,0.1,0.6)),url(${slider1}) no-repeat center center / cover`
                }}>
                    <Carousel.Caption>
                        <p style={{ height: "100px", fontFamily: "Quattrocento", fontSize: "2.2rem", color: "white", zIndex: "2" }}><em>"The true meaning of life is to plant trees, under whose shade you do not expect to sit.”</em></p>
                        <h3 style={{ height: "250px", fontFamily: "Quattrocento", fontSize: "3.5rem", color: "white", zIndex: "2" }}><em>~Nelson Henderson</em></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={100} style={{
                    height: "600px", background:
                        `linear-gradient(to top, rgba(0,0,0,1), rgba(0.1,0.1,0.1,0.6)),url(${slider2}) no-repeat center center / cover`
                }}>
                    <Carousel.Caption>
                        <p style={{ height: "100px", fontFamily: "Quattrocento", fontSize: "2.2rem", color: "white", zIndex: "2" }}><em>“People who will not sustain trees will soon live in a world that will not sustain people."</em></p>
                        <h3 style={{ height: "250px", fontFamily: "Quattrocento", fontSize: "3.5rem", color: "white", zIndex: "2" }}><em>~Bryce Nelson</em></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{
                    height: "600px", background:
                        `linear-gradient(to top, rgba(0,0,0,1), rgba(0.1,0.1,0.1,0.6)),url(${slider3}) no-repeat center center / cover`
                }}>

                    <Carousel.Caption>
                        <p style={{ height: "100px", fontFamily: "Quattrocento", fontSize: "2.2rem", color: "white", zIndex: "2" }}><em>"There are two ways through life: The way of Nature, and the way of Grace. You have to choose which one you will follow."</em></p>
                        <h3 style={{ height: "250px", fontFamily: "Quattrocento", fontSize: "3.5rem", color: "white", zIndex: "2" }}><em>~ Mrs O'Brien</em></h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel >
            <div className="container-fluid" style={{ background: "#104f57", height: "110px" }}>
                <h2 style={{
                    padding: "1.5rem 0rem 0rem 7rem",
                    fontSize: " 2rem", fontFamily: "Quattrocento", color: "white"
                }}>Together to help the world better!</h2>
            </div>
        </div>
    )
}

export default Slider