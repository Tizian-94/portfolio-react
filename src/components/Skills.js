import React from "react";
import { render } from "react-dom";



import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";

import AnimatedProgressProvider from "./AnimatedProgressProvider";
import ChangingProgressProvider from "./ChangingProgressProvider";
import RadialSeparators from "./RadialSeparators";



export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max:464, min: 0 },
            items: 1
        }
    };
    const percentage = 66;
    
    return (
        <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>Being a fullstack web developer requires knowledge in various fields and departments, every project that i have taken these past few years has helped me further improve my knowledge on these subjects.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <div id="speedometer_container">
                            <ChangingProgressProvider values={[80, 80, 0, 80, 80]}>
                                {percentage => (
                            <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
                                pathTransitionDuration: 1
                            })}/>
                        )}
                            </ChangingProgressProvider>
                            </div>
                                <h5>Django & Python</h5>
                                <div class="first "></div>
                                
                            </div>
                            <div className="item">
                            <div id="speedometer_container">
                            <ChangingProgressProvider values={[75, 75, 0, 75, 75]}>
                                {percentage => (
                            <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
                                pathTransitionDuration: 1
                            })}/>
                        )}
                            </ChangingProgressProvider>
                            </div>
                                <h5>React</h5>
                            </div>
                            <div className="item">
                            <div id="speedometer_container">
                            <ChangingProgressProvider values={[65, 65, 0, 65, 65]}>
                                {percentage => (
                            <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
                                pathTransitionDuration: 1
                            })}/>
                        )}
                            </ChangingProgressProvider>
                            </div>
                                <h5>AWS</h5>
                            </div>
                            <div className="item">
                            <div id="speedometer_container">
                            <ChangingProgressProvider values={[95, 95, 0, 95, 95]}>
                                {percentage => (
                            <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
                                pathTransitionDuration: 1
                            })}/>
                        )}
                            </ChangingProgressProvider>
                            </div>
                                <h5>Wordpress & Elementor</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}