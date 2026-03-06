import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>

        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">

              <div className="intro-text">
                <p>
                  Hey there! I'm <b className="purple">Akshay Ramteke</b>, a Full-Stack Developer with
                  more than <b className="purple">8+ years of experience</b> building scalable web
                  applications and backend systems. I enjoy turning complex ideas into
                  reliable and efficient digital solutions.
                </p>

                <p>
                  My core expertise lies in <b className="purple">Node.js</b>,
                  <b className="purple"> React.js</b>, and <b className="purple">Laravel</b>,
                  along with working with databases like PostgreSQL and MongoDB.
                  I also have hands-on experience with <b className="purple">AWS</b>,
                  Docker, and modern deployment practices.
                </p>

                <p>
                  Currently, I work on a <b className="purple">Digital Customer Onboarding
                    Platform at John Deere</b> via <b className="purple">YASH Technologies</b>,
                  where I develop scalable UI modules using React and Microfrontend architecture.
                </p>
              </div>

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/akshay-ramteke-55981a99/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
