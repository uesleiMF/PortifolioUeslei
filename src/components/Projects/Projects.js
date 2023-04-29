import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import A from "../../Assets/Projects/A.png";
import U from "../../Assets/Projects/U.png";

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
             imgPath={A}
              isBlog={false}
              title="Rede de Casais"
              description="Ministerio de Casais IEQ."
              ghLink="https://github.com/uesleiMF"
              demoLink="https://front1-vert.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={U}
              isBlog={false}
              title="Portifolio"
              description="Meu Portifolio."
              ghLink="https://github.com/uesleiMF"
              demoLink="https://portifolio-ueslei.vercel.app/"
            />
          </Col>

         
        

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
