import PropTypes from "prop-types";
import React, { Component } from "react";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.onEscape);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.onEscape);
  }
  onEscape = (e) => {
    this.props.onClose(e);
  };
  render() {
    return (
      <div className="Overlay" onClick={this.props.onClose}>
        <div className="Modal">
          <img src={this.props.modalImg} alt="" />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  modalImg: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
export default Modal;