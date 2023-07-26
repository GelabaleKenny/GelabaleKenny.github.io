import "./styles.css";
import avatar from "../../Assets/images/me.png";
import Pdf from "../../Assets/docs/Gelabale-Kenny-CV-2.pdf";
import { useEffect, useRef } from "react";
const Experience = ({ setActiveSection }) => {
  const experienceRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offsetTop = experienceRef.current.offsetTop;

      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + experienceRef.current.offsetHeight
      ) {
        setActiveSection("experience");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  const experienceData = [
    {
      title: "Projet Apothéose",
      company: "O'clock",
      date: "Avril 2023",
      description:
        "Élaboration d'un cahier des charges Installation de React/Redux pour le frontend et Symfony pour le backend. Configuration des outils Git et GitHub pour le versioning. Utilisation de la méthode AGILE pour la gestion de projet Déploiement de l'application sur un serveur de production.",
    },
    {
      title: "Maga-sap | e-commerce",
      company: "Projet perso",
      date: "Mars 2023",
      description:
        "Définition des objectifs du projet. Conception de l'architecture en utilisant React et Redux. Création d'une API REST sécurisée avec Laravel. Intégration des composants React et communication avec l'API.",
    },
    {
      title: "Cw photography",
      company: "Projet perso",
      date: "Août 2022",
      description: "Création d'une page vitrine pour m'exercer en HTML & CSS.",
    },
    {
      title: "Application web Snake",
      company: "Projet perso",
      date: "Août 2022",
      description:
        'Création d\'une application web reprenant les "code" du jeu mondialement connu : SNAKE en JavaScript.',
    },
    {
      title: "Responsable magasin",
      company: "The Kase",
      date: "Janvier 2020 - Juillet 2022",
      description:
        "Encadrer des équipes de 2 à 6 personnes. Mise en œuvre de l’organisation de l’unité de vente. Analyser, suivre et agir sur les indicateurs de performance (PM, CA) sur les 3 axes : approvisionnement, vente et flux monétaire. Mettre en avant les offres en cours. Recruter, intégrer et former les collaborateurs. Planifier les éléments administratifs (CP, absence…). Sanctionner (Gestion des conflits internes). Gérer les litiges client.",
    },
    {
      title: "Vendeur réparateur",
      company: "The Kase",
      date: "Avril 2017 - Janvier 2020",
      description:
        "Accueillir, conseiller et fidéliser la clientèle. Réaliser des actions de prospection. Évaluer les besoins clients. Utilisation des techniques de vente. Vendre des produits et services additionnels. Réparation de smartphones et tablettes.",
    },
  ];
  return (
    <section id="experience" ref={experienceRef}>
      <div className="container">
        <div className="white-divider"></div>
        <div className="heading">
          <h2>Expérience Professionnelle</h2>
        </div>
        <ul className="timeline">
          {experienceData.map((experience, index) => (
            <li key={index}>
              <div className="timeline-badge">
                <span className="glyphicon glyphicon-briefcase"></span>
              </div>
              <div
                className={`timeline-panel-container ${
                  index % 2 === 0 ? "" : "timeline-panel-container-inverted"
                }`}
              >
                <div className="timeline-panel ">
                  <div className="timeline-heading">
                    <h3>{experience.title}</h3>
                    <h4>{experience.company}</h4>
                    <p className="text-muted">
                      <small className="glyphicon glyphicon-time"></small>{" "}
                      {experience.date}
                    </p>
                  </div>
                  <div className="timeline-body">
                    <p>{experience.description}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
