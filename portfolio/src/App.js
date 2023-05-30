import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Me from "./Components/Me";
import Skills from "./Components/Skills";
import { useEffect, useRef, useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      const active = sectionsRef.current.find((sectionRef) => {
        const { offsetTop, offsetHeight } = sectionRef.current;
        return (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        );
      });

      if (active) {
        setActiveSection(active.current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleNavClick = (section) => {
    setActiveSection(section);

    let scrollPosition;
    switch (section) {
      case "about":
        scrollPosition = activeSection.current.offsetTop;
        break;
      case "skills":
        scrollPosition = activeSection.current.offsetTop;
        break;
      case "experience":
        scrollPosition = activeSection.current.offsetTop;
        break;
      case "education":
        scrollPosition = activeSection.current.offsetTop;
        break;
      case "portfolio":
        scrollPosition = activeSection.current.offsetTop;
        break;
      default:
        scrollPosition = 0;
    }
  };
  return (
    <>
      <Header activeSection={activeSection} />
      <Me ref={(ref) => (sectionsRef.current[0] = ref)} />
      <Skills ref={(ref) => (sectionsRef.current[1] = ref)} />

      <Footer />
    </>
  );
}

export default App;
