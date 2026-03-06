import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaDatabase
} from "react-icons/fa";
import { SiLaravel, SiPostgresql, SiJavascript, SiMysql } from "react-icons/si";

import "../../../src/Techstack.css";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <FaReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaNodeJs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaGitAlt />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase />
      </Col>

    </Row>
  );
};

export default Techstack;