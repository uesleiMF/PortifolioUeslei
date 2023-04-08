import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import dev from "../../Assets/a.jpeg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
             MEUS <strong className="purple">OBJETIVOS</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "150px", paddingBottom: "80px" }}
            className="about-img"
          >
            <img src={dev} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Pleno <strong className="purple">Conjunto de habilidades</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Ferramentas </strong> que eu uso 
        </h1>
        <Toolstack />

      
      </Container>
    </Container>
  );
}

export default About;
