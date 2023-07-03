import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDelting] = useState(false);
    const toRotate = ["Web Developer", "Software Engineer", "3D Artist" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    function sendEmail()
        {
            window.location = "mailto:tizian94@gmail.com";
        }

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDelting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText === '') {
            setIsDelting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }

        
    }
    
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible}) => 
                            <div className={isVisible ? "animate_animated animate__fadeIn" : ""}>
                            <span className="tagline">Welcome</span>
                            <h1>{'I`m Tizian '}<br></br><span className="wrap">- {text}</span></h1>
                            <p id="introtext">I have been a software engineer since 2019, making various freelance projects and since 2021 i started my professional career in programming in an international startup company based in Croatia. My primary skills lie in quick designing and creation of websites, but i am also interested in creating larger scale webapps in combination with python, django & wagtail CMS.
                            </p>
                            <button onClick={() => sendEmail()}>Contact me by email<ArrowRightCircle size={25} /> </button>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
        
    )
}