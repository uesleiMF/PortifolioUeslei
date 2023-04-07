import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           
            
            <br />Estou trabalhando no ramo de segurança eletrônica
             já trabalhei na área elétrica e agora estou estudando 
             em uma área que me identifiquei e quero exercê-la
              Analise e Desenvolvimento de Sistemas meu foco maior 
              e trabalhar com vocês me empenhar em todos os treinamentos 
              para que no futuro próximo eu venha crescer e me
             desenvolver com a empresa.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
