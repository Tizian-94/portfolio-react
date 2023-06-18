import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import projImg13 from "../assets/img/project-img13.png";
import projImg14 from "../assets/img/project-img14.png";
import projImg15 from "../assets/img/project-img15.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";


export const Projects = () => {

    const projects = [
        {
          title: "Design & Planning",
          description: "Figma & Figjam conceptualisation & design",
          imgUrl: projImg1,
        },
        {
          title: "Static Websites",
          description: "Wordpress, Elementor & simple html websites",
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
          imgUrl: projImg4,
        },
        {
          title: "AWS management",
          description: "CloudTrail & S3",
          imgUrl: projImg5,
        },
        {
          title: "Code deployment and maintenance",
          description: "Heroku, Railway, PythonAnywhere & more!",
          imgUrl: projImg6,
        },
      ];
    const projects3d = [
        {
          title: "Mesh Creation",
          description: "Static Mesh creation Unwrap & Texturing",
          imgUrl: projImg7,
        },
        {
          title: "Character Creation",
          description: "Character creation, texturing, bone rigging & weight painting",
          imgUrl: projImg8,
        },
        {
          title: "Character/Mesh Animation",
          description: "Walk cycles, dynamic & idle animations",
          imgUrl: projImg9,
        },
        {
          title: "Imports & Exports",
          description: "Converting files and objects to and from Maya, Blender, Unity & Unreal Engine",
          imgUrl: projImg10,
        },
        {
          title: "World Building & Level design",
          description: "3d or 2d obstacles, events and cutscenes",
          imgUrl: projImg11,
        },
        {
          title: "Sound design",
          description: "Ambiental music & basic level soundtracks",
          imgUrl: projImg12,
        },
      ];
      const projectsiot = [
        {
          title: "Custom Linux Server setup",
          description: "Website or file hosting on private server",
          imgUrl: projImg13,
        },
        {
          title: "LoRa Reciever parser server",
          description: "Parse geodata and text from LoRa module",
          imgUrl: projImg14,
        },
        {
          title: "Arduino & Python 2",
          description: "Led,4-12 dof arms & hexapods, drones, etc.",
          imgUrl: projImg15,
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
                        <p>Here you can check out some previews of the projects i have worked on/am currently working on to get a better idea of what my crafts are all about. If you have any questions feel free to ask</p>
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
                            <Tab.Pane eventKey="second">
                                <Row>
                                {
                                        projects3d.map((project, index) => {
                                            return (
                                                <ProjectCard 
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row></Tab.Pane>
                            
                            <Tab.Pane eventKey="third"><Row>
                                {
                                        projectsiot.map((project, index) => {
                                            return (
                                                <ProjectCard 
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                    </Row></Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}