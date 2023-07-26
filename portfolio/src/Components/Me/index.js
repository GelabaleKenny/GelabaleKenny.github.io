import "./styles.css";
import avatar from "../../Assets/images/me.png";
import Pdf from "../../Assets/docs/Gelabale-Kenny-CV-2.pdf";
import { useEffect, useRef } from "react";

const Me = ({ setActiveSection }) => {
  const presentationRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offsetTop = presentationRef.current.offsetTop;

      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + presentationRef.current.offsetHeight
      ) {
        setActiveSection("about");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  return (
    <section id="about" ref={presentationRef}>
      <div className="col-xs-8 col-md-4 profile-picture">
        <img src={avatar} alt="kenny-gelabale" className="rounded-circle" />
      </div>
      <div className="heading">
        <h1>Gelabale Kenny</h1>
        <h3>Développeur Web & web mobile</h3>
        <a href={Pdf} target="_blank" className="button1">
          Télécharger CV
        </a>
      </div>
    </section>
  );
};

export default Me;
