import "./styles.css";
import SkillsCard from "./SkillsCard";
import { useEffect, useRef } from "react";

const Skills = ({ setActiveSection }) => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offsetTop = skillsRef.current.offsetTop;

      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + skillsRef.current.offsetHeight
      ) {
        setActiveSection("skills");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  return (
    <section id="skill" ref={skillsRef}>
      <SkillsCard />
    </section>
  );
};

export default Skills;
