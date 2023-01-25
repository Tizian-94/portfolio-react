import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";


export const Projects = () => {

    const projects = [
        {
          title: "Design & Planning",
          description: "Create the perfect layout for you page",
          imgUrl: projImg1,
        },
        {
          title: "Static Websites",
          description: "Simple one page websites",
          imgUrl: projImg2,
        },
        {
          title: "Business level Websites",
          description: "Complex websites with multiple pages",
          imgUrl: projImg3,
        },
        {
          title: "Web aplications",
          description: "Multi layered web apps & CMS with administration",
          imgUrl: projImg1,
        },
        {
          title: "Wordpress and Wix",
          description: "Websites using preset tools",
          imgUrl: projImg2,
        },
        {
          title: "Code deployment and AWS",
          description: "Various integration with leading technology",
          imgUrl: projImg3,
        },
      ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({ isVisible}) => 
                            <div className={isVisible ? "animate_animated animate__slideInUp" : ""}>
                        <h2>Projects</h2>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>}
                    </TrackVisibility>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Web Development</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">3D Modelling & animation</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">IOT & LoraWAN</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard 
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">3D Modelling & animation</Tab.Pane>
                            <Tab.Pane eventKey="third">IOT & LoraWAN</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}