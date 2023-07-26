import React from "react";
import { Modal } from "react-bootstrap";

const BookmarkVideo = ({ handleClose, videoUrl }) => {
  return (
    <div>
      <div className="modal" style={{ display: "block" }}>
        <div className="modal-content">
          <button onClick={handleClose}>Fermer la modal</button>
        </div>
        <video width="100%" height="90%" controls>
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default BookmarkVideo;
