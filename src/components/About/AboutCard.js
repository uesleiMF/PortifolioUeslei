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
              <ImPointRight /> Automação Residencial
            </li>
            <li className="about-activity">
              <ImPointRight /> Assistir videos de Tecnologia
            </li>
            <li className="about-activity">
              <ImPointRight /> nnnnnnn
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            ""{" "}
          </p>
          <footer className="blockquote-footer">JUMF</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
