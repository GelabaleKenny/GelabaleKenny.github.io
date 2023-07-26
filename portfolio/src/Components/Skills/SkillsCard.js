import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import html from "../../Assets/images/html.png";
import css from "../../Assets/images/CSS.png";
import Javascript from "../../Assets/images/Javascript.png";
import react from "../../Assets/images/react.png";
import Redux from "../../Assets/images/redux.png";
import Semantic from "../../Assets/images/semanticUi.png";
import Bootstrap from "../../Assets/images/Bootstrap.png";
import PHP from "../../Assets/images/php.png";
import Laravel from "../../Assets/images/Laravel.png";
import Git from "../../Assets/images/git.png";
import GitHub from "../../Assets/images/gitHub.png";
import MySQL from "../../Assets/images/mysql.png";

const SkillsCard = () => {
  const competences = [
    { titre: "Html", image: html },
    { titre: "CSS", image: css },
    { titre: "Javascript", image: Javascript },
    { titre: "React", image: react },
    { titre: "Redux", image: Redux },
    { titre: "Semantic UI", image: Semantic },
    { titre: "Bootstrap", image: Bootstrap },
    { titre: "PHP", image: PHP },
    { titre: "Laravel", image: Laravel },
    { titre: "GIT", image: Git },
    { titre: "GITHUB", image: GitHub },
    { titre: "MySQL", image: MySQL },
  ];

  const renderCompetences = () => {
    return competences.map((competence, index) => (
      <Col className="mb-3" key={index} md={4} sm={6} lg={2}>
        <Card className="h-100 align-items-center">
          <Card.Body className="d-flex flex-column">
            <Card.Img
              variant="top"
              className="card-img-top skills--img mb-5"
              src={competence.image}
            />
            <Card.Title>{competence.titre}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <div>
      <h1 className="mb-4">Mes Compétences</h1>
      <Row>{renderCompetences()}</Row>
    </div>
  );
};

export default SkillsCard;
