import "./App.css";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Me from "./Components/Me";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import { useEffect, useRef, useState } from "react";
import BookmarkDemo from "./Components/Demos/BookmarkDemo";
import SnakeDemo from "./Components/Demos/SnakeDemo";
import BookmarkVideo from "./Components/Demos/BookmarkDemo/BookmarkVideo";

function App() {
  const [activeSection, setActiveSection] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalBookmarkOpen, setIsModalBookmarkOpen] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);

    let scrollPosition;
    switch (section) {
      case "presentation":
        scrollPosition = 0; // Scroll jusqu'au début de la section Présentation
        break;
      case "skills":
        scrollPosition = window.innerHeight; // Scroll jusqu'au début de la section Compétences
        break;
      case "experience":
        scrollPosition = window.innerHeight; // Scroll jusqu'au début de la section Experiences
        break;
      case "portfolio":
        scrollPosition = window.innerHeight; // Scroll jusqu'au début de la section Experiences
        break;
      default:
        scrollPosition = 0;
    }

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openBookmarkModal = () => {
    setIsModalBookmarkOpen(true);
  };
  const closeBookmarkModal = () => {
    setIsModalBookmarkOpen(false);
  };
  return (
    <>
      <Header activeSection={activeSection} handleNavClick={handleNavClick} />
      {isModalBookmarkOpen && (
        <BookmarkVideo
          handleClose={closeBookmarkModal}
          videoUrl={
            "https://drive.google.com/file/d/1_ArYDxZ4CUrIGW8GZYNSCfCrR_y7lr5g/view?usp=sharing"
          }
        />
      )}
      {isModalOpen && <SnakeDemo closeModal={closeModal} />}
      <Me setActiveSection={setActiveSection} />
      <Skills setActiveSection={setActiveSection} />
      <Experience setActiveSection={setActiveSection} />
      <Education setActiveSection={setActiveSection} />
      <Portfolio
        setActiveSection={setActiveSection}
        openModal={openModal}
        openBookmarkModal={openBookmarkModal}
      />
      <Footer />
    </>
  );
}

export default App;
