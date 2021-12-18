import PropTypes from "prop-types";
import React, { useEffect } from "react";

const Modal = ({ modalImg, onClose }) => {
  
  useEffect(() => {
    window.addEventListener("keydown", onEscape);
    return () => {
      window.removeEventListener("keydown", onEscape);
    }
  
  })
  
  const onEscape = (e) => {
    onClose(e);
  };
  
    return (
      <div className="Overlay" onClick={onClose}>
        <div className="Modal">
          <img src={modalImg} alt="" />
        </div>
      </div>
    );
  
}
Modal.propTypes = {
  modalImg: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
export default Modal;