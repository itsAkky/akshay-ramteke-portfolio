import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Software Engineer",
          "8+ Years Building Scalable Web Applications",
          "React.js | Node.js | Laravel Developer",
          "AWS & Cloud-Native Application Builder",
          "Backend API & System Design Specialist",
          "Microfrontend Architecture Enthusiast",
          "Japanese Language Enthusiast (JLPT N4 / N5)"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;
