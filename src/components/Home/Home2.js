import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/JU.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h2 style={{ fontSize: "2.6em" }}>
              DEIXE-ME <span className="purple"> APRESENTAR </span> <br></br>Soft Skills
            </h2>
           <i>
            <b className="purple">
              Me Chamo Jose Ueslei de Moraes Ferreira, Tenho 38 anos sou
              brasileiro Natural de Marabá-PA. Tenho 3 Filhas Sou Casado e evangelico.
              </b>
              </i>
                 
       
             
            
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid rounded-circle"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCONTRE-ME EM</h1>
            <p>
              Sinta-se à vontade para{" "}
              <span className="purple">se conectar </span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/uesleiMF"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jose-ueslei-de-moraes-ferreira-833b52112"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
