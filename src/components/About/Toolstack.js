import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiGitlab,
  SiJira,
  SiAmazonaws,
  SiFigma
} from "react-icons/si";

import "../../../src/Toolsstack.css";

const Toolsstack = () => {
  const tools = [
    { icon: <SiVisualstudiocode />, text: "VS Code", url: "https://code.visualstudio.com/" },
    { icon: <SiPostman />, text: "Postman", url: "https://www.postman.com/" },
    { icon: <SiGithub />, text: "GitHub", url: "https://github.com/" },
    { icon: <SiGitlab />, text: "GitLab", url: "https://gitlab.com/" },
    { icon: <SiJira />, text: "Jira", url: "https://www.atlassian.com/software/jira" },
    { icon: <SiAmazonaws />, text: "AWS Console", url: "https://aws.amazon.com/" },
    { icon: <SiFigma />, text: "Figma", url: "https://figma.com/" }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="tool-container">
              {tool.icon}
              <span className="tool-text">{tool.text}</span>
            </div>
          </a>
        </Col>
      ))}
    </Row>
  );
};

export default Toolsstack;