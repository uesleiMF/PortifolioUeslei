import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br />
            Estou trabalhando no ramo de Segurança Eletrônica já trabalhei na
            área Elétrica e agora estou estudando em uma área que me
            identifiquei e quero exercê-la Tenho Graduação em Analise e
            Desenvolvimento de Sistemas, Sou um programador web com 4 anos
            praticando. No momento apenas cursos e projetos. nunca trabalhei
            nesta area mais para mim seria um passo inicial onde almejo migrar
            de carreira. Na sua empresa, buscarei oportunidades semelhantes para
            otimizar seus códigos.
          </p>
          <p>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Meus <strong className="purple"> Hobbies</strong>
            </h1>

            <h1 style={{ fontSize: "1.0em", paddingBottom: "20px" }}>
              <strong className="pur"> PROGRAMAÇÃO WEB---</strong>

              <span className="wave" role="img" aria-labelledby="wave">
                💻
              </span>
            </h1>
            <h1 style={{ fontSize: "1.0em", paddingBottom: "20px" }}>
              <strong className="pur"> VIDEOS DE TECNOLOGIAS---</strong>

              <span className="wave" role="img" aria-labelledby="wave">
                📽
              </span>
            </h1>
            <h1 style={{ fontSize: "1.0em", paddingBottom: "20px" }}>
              <strong className="pur"> AUTOMAÇÃO RESIDENCIAL---</strong>

              <span className="wave" role="img" aria-labelledby="wave">
                📲
              </span>
            </h1>
          </p>
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            Minhas <strong className="purple"> Habilidades:</strong>
          </h1>

          <h1 style={{ fontSize: "1.0em", paddingBottom: "20px" }}>
            <strong className="pur">HTML--CSS--JAVASCRIPT</strong>
          </h1>
          <h1 style={{ fontSize: "1.0em", paddingBottom: "20px" }}>
            <strong className="pur">
              REACT NATIVE--REACTJS--NEXTJS--NESTJS
            </strong>
          </h1>
          <h1 style={{ fontSize: "1.0em", paddingBottom: "20px" }}>
            <strong className="pur">MONGODB--FIREBASE--POSTGRES</strong>
          </h1>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
