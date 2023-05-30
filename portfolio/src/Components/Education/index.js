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
      <div class="container">
        <div class="red-divider"></div>
        <div class="heading">
          <h2>Education</h2>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="education-block">
              <h5>2022 - 2023</h5>
              <span class="glyphicon glyphicon-education"></span>
              <h3>École O'clock - Paris</h3>
              <h4>Formation Développeur web & web mobile</h4>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="education-block">
              <h5>2018</h5>
              <span class="glyphicon glyphicon-education"></span>
              <h3>ATK conseil</h3>
              <h4>Responsable Petites et Moyennes structures</h4>
              <div class="red-divider"></div>
              <p>Gestion du personel</p>
              <p>adaptation du type de management</p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="education-block">
              <h5>2013 - 2015</h5>
              <span class="glyphicon glyphicon-education"></span>
              <h3>Akor alternance</h3>
              <h4>BTS Management des unités commercial</h4>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="education-block">
              <h5>2013</h5>
              <span class="glyphicon glyphicon-education"></span>
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
