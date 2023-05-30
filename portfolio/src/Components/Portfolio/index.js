import "./styles.css";
import { useEffect, useRef } from "react";
import magaSap from "../../Assets/images/maga-sap.png";
import cwPhoto from "../../Assets/images/cw_photography.png";
import linkedin from "../../Assets/images/linkedin.jpg";
import snake from "../../Assets/images/snake.png";
import bookmark from "../../Assets/images/bookmark.png";
import { Link } from "react-router-dom";

const Portfolio = ({ setActiveSection }) => {
  const portfolioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offsetTop = portfolioRef.current.offsetTop;

      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + portfolioRef.current.offsetHeight
      ) {
        setActiveSection("portfolio");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  return (
    <section id="portfolio" ref={portfolioRef}>
      <div class="container">
        <div class="white-divider"></div>
        <div class="heading">
          <h2>Portfolio</h2>
        </div>
        <div class="row">
          <div class="col-sm-4 m mt-2">
            <Link class="thumbnail" to={"/bookmark"} target="_blank">
              <img src={bookmark} alt="apperçu du site Bookmark" />
            </Link>
          </div>
          <div class="col-sm-4 m mt-2">
            <Link class="thumbnail" href="images/maga-sap.png" target="_blank">
              <img src={magaSap} alt="apperçu du site maga-sap" />
            </Link>
          </div>
          <div class="col-sm-4 m mt-2">
            <Link class="thumbnail" to={"/snake"} target="_blank">
              <img src={snake} alt="apperçu du jeu snake" />
            </Link>
          </div>
          <div class="col-sm-4 m mt-2">
            <Link
              class="thumbnail"
              href="images/cw_photography.png"
              target="_blank"
            >
              <img src={cwPhoto} alt="apperçu du site cw_photography" />
            </Link>
          </div>
          <div class="col-sm-4 m mt-2">
            <Link
              class="thumbnail"
              href="https://www.linkedin.com/in/kenny-gelabale/"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
