import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
//import v from "../../Assets/Projects/t.mp4";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Projetos </strong>
        </h1>
        <p style={{ color: "white" }}>
        Aqui estão alguns de meus projetos!!!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              src=""
              type=""
              title=""
              description="Personal Chatssages."
              ghLink="https://github.com/uesleiMF"
              demoLink="https://"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from  markdown."
              ghLink="https://github.com/uesleiMF"
              demoLink="https://"
            />
          </Col>

         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="AI"
              description="Used the plant disease."
              ghLink="https://github.com/uesleiMF"
              demoLink="https://"
            />
          </Col>
        

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
