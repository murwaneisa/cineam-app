import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MdOutlineClose } from "react-icons/md";

function VideoPlayer({ show, handleClose, trailer_key }) {
  return (
    <>
      <Modal
        size="lg"
        centered
        show={show}
        onHide={handleClose}
        animation={false}
        dialogClassName="custom-modal"
      >
        <button className="custom-close-button" onClick={handleClose}>
          <MdOutlineClose className="icon-close-btn" color="#ffffff" />
        </button>
        <div>
          <iframe
            src={`https://www.youtube.com/embed/${trailer_key}?modestbranding=1&rel=0`}
            title="Movie Trailer"
            frameBorder="0"
            allowFullScreen
            style={{ width: "100%", height: "400px" }}
          ></iframe>
        </div>
      </Modal>
    </>
  );
}

export default VideoPlayer;
