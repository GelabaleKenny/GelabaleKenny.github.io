import React, { useState } from "react";
import snake from "../../../Assets/images/snake.png";
const ImageWithHoverButton = ({ image, buttonText, buttonOnClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={image} alt="Image" />

      {isHovered && (
        <button className="button-hovered" onClick={buttonOnClick}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default ImageWithHoverButton;
