import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akshay Ramteke</span> from
            <span className="purple"> Maharashtra, India.</span><br /><br />
            I am a Full-Stack Developer with 8+ years of experience building scalable web applications and backend systems.
            I specialize in developing efficient APIs, optimizing performance, and creating user-friendly solutions.
            My experience spans across modern technologies including React.js, Node.js, Laravel, and cloud platforms like AWS.
            I enjoy solving complex problems and building reliable systems that scale well in real-world environments.
          </p>
          <br />

          <p style={{ textAlign: "justify" }}>
            <h4>What Sets Me Apart:</h4>
            <span className="purple">Full-Stack Expertise:</span> Experienced in both frontend and backend development using technologies like React.js, Node.js, Laravel, PostgreSQL, and MongoDB.<br />
            <span className="purple">Cloud & DevOps Experience:</span> Hands-on experience with AWS services such as EC2, Lambda, S3, EventBridge, CloudWatch, and Docker-based deployments.<br />
            <span className="purple">Scalable Architecture:</span> Experience building Microfrontend architectures and scalable backend APIs for large platforms such as digital onboarding systems.<br />
            <span className="purple">Problem Solving & Optimization:</span> Known for improving system performance, optimizing database queries, and integrating third-party APIs effectively.
          </p>

          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Networking Events
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Business Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          {/* <p style={{ textAlign: "justify" , color: "rgb(155 126 172)" }}>
            "Crafting words that inspire and resonate with impact!"{" "}
          </p>
          <footer className="blockquote-footer">Akshay</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
