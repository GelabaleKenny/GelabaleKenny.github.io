import { Route, Routes } from "react-router-dom";
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

function App() {
  const [activeSection, setActiveSection] = useState("");

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
      default:
        scrollPosition = 0;
    }

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header activeSection={activeSection} handleNavClick={handleNavClick} />
      <Routes>
        <Route path="/Bookmark" element={<BookmarkDemo />} />
        <Route path="/snake" element={<SnakeDemo />} />
      </Routes>
      <Me setActiveSection={setActiveSection} />
      <Skills setActiveSection={setActiveSection} />
      <Experience setActiveSection={setActiveSection} />
      <Education setActiveSection={setActiveSection} />
      <Portfolio setActiveSection={setActiveSection} />
      <Footer />
    </>
  );
}

export default App;
