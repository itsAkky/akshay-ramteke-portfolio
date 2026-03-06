import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutMore() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Over the past 8+ years, I’ve worked across different layers of web
            development — from building responsive frontends to designing reliable
            backend systems and deploying applications to the cloud. I enjoy solving
            complex technical problems and turning ideas into practical, scalable
            products.
          </p>
          <br />

          <p style={{ textAlign: "justify" }}>
            My experience spans product development, API design, cloud deployments,
            and performance optimization. I’ve contributed to platforms in domains
            such as digital onboarding, agriculture networking, bookkeeping systems,
            and e-commerce, always focusing on clean architecture and maintainable
            code.
          </p>

          <br />

          <ul>
            <li className="about-activity">
              <h2>Highlights</h2>
            </li>

            <li className="about-activity">
              <span className="purple">&#10004;</span> 8+ years building real-world production applications
            </li>

            <li className="about-activity">
              <span className="purple">&#10004;</span> Experience working across frontend, backend, and cloud
            </li>

            <li className="about-activity">
              <span className="purple">&#10004;</span> Contributor to large-scale enterprise projects
            </li>

            <li className="about-activity">
              <span className="purple">&#10004;</span> Comfortable working with modern architectures and evolving tech stacks
            </li>

            <li className="about-activity">
              <span className="purple">&#10004;</span> Strong focus on practical solutions and clean code
            </li>

            <li className="about-activity">
              <span className="purple">&#10004;</span> Experience mentoring teammates and collaborating in Agile teams
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutMore;
