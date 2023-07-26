import "./styles.css";
import { useEffect, useRef } from "react";
import magaSap from "../../Assets/images/maga-sap.png";
import cwPhoto from "../../Assets/images/cw_photography.png";
import linkedin from "../../Assets/images/linkedin.jpg";
import snake from "../../Assets/images/snake.png";
import bookmark from "../../Assets/images/bookmark.png";
import { Link } from "react-router-dom";
import ImageWithHoverButton from "../Demos/SnakeDemo/ImageWithHoverButton";
import BookmarkDemo from "../Demos/BookmarkDemo";
// import BookmarkPresentation from "../../Assets/video/Bookmark.mp4";
import BookmarkVideo from "../Demos/BookmarkDemo/BookmarkVideo";

const Portfolio = ({
  setActiveSection,
  openModal,
  openBookmarkModal,
  closeBookmarkModal,
}) => {
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
      <div className="container">
        <div className="white-divider"></div>
        <div className="heading">
          <h2>Portfolio</h2>
        </div>
        <div className="row">
          <div className="col-sm-4 m mt-2">
            <a className="thumbnail" onClick={openBookmarkModal}>
              <img src={bookmark} alt="" />
            </a>
          </div>
          <div className="col-sm-4 m mt-2">
            <Link
              className="thumbnail"
              href="images/maga-sap.png"
              target="_blank"
            >
              <img src={magaSap} alt="apperçu du site maga-sap" />
            </Link>
          </div>
          <div className="col-sm-4 m mt-2">
            <a className="thumbnail">
              <ImageWithHoverButton
                image={snake}
                buttonText="Essayez moi"
                buttonOnClick={openModal}
              />
            </a>
          </div>
          <div className="col-sm-4 m mt-2">
            <Link
              className="thumbnail"
              href="images/cw_photography.png"
              target="_blank"
            >
              <img src={cwPhoto} alt="apperçu du site cw_photography" />
            </Link>
          </div>
          <div className="col-sm-4 m mt-2">
            <Link
              className="thumbnail"
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
