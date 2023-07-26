import "./styles.css";
import avatar from "../../Assets/images/me.png";
import Pdf from "../../Assets/docs/Gelabale-Kenny-CV-2.pdf";
import { useEffect, useRef } from "react";
const Education = ({ setActiveSection }) => {
  const educationRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offsetTop = educationRef.current.offsetTop;

      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + educationRef.current.offsetHeight
      ) {
        setActiveSection("education");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  return (
    <section id="education" ref={educationRef}>
      <div className="container">
        <div className="red-divider"></div>
        <div className="heading">
          <h2>Education</h2>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="education-block">
              <h5>2022 - 2023</h5>
              <span className="glyphicon glyphicon-education"></span>
              <h3>École O'clock - Paris</h3>
              <h4>Formation Développeur web & web mobile</h4>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="education-block">
              <h5>2018</h5>
              <span className="glyphicon glyphicon-education"></span>
              <h3>ATK conseil</h3>
              <h4>Responsable Petites et Moyennes structures</h4>
              <div className="red-divider"></div>
              <p>Gestion du personel</p>
              <p>adaptation du type de management</p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="education-block">
              <h5>2013 - 2015</h5>
              <span className="glyphicon glyphicon-education"></span>
              <h3>Akor alternance</h3>
              <h4>BTS Management des unités commercial</h4>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="education-block">
              <h5>2013</h5>
              <span className="glyphicon glyphicon-education"></span>
              <h3>Lycée Mistral</h3>
              <h4>
                Baccalauréat : Prospection, négociation et suivis clientèle
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
