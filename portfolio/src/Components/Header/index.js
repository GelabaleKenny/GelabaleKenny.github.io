import { NavLink } from "react-router-dom";
import "./styles.css";
const Header = ({ activeSection }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-center fixed-top">
      <div className="container">
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="navbar navbar-nav me-auto mb-2 mb-lg-0">
            <li
              className={
                activeSection === "about" ? "nav-item active" : "nav-item"
              }
            >
              <a href="#about" className="linkNav ">
                Présentation
              </a>
            </li>
            <li
              className={
                activeSection === "skills" ? "nav-item active" : "nav-item"
              }
            >
              <a href="#skills" className="linkNav ">
                Compétences
              </a>
            </li>
            <li className="nav-item">
              <a href="#experience" className="linkNav ">
                Expérience
              </a>
            </li>
            <li className="nav-item">
              <a href="#education" className="linkNav ">
                Éducation
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="linkNav ">
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
