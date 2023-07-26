import React from "react";
import { Modal } from "react-bootstrap";

const BookmarkDemo = ({ closeModal }) => {
  return (
    <div>
      <Modal onRequestClose={closeModal}>
        <button onClick={closeModal}>Fermer</button>
        <iframe
          title="Vidéo"
          width="560"
          height="315"
          src="https://drive.google.com/file/d/1A9w6Bt8w42jK5Xflh6UJHmo4_HOT2QK3/view?usp=drive_link"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Modal>
    </div>
  );
};

export default BookmarkDemo;
