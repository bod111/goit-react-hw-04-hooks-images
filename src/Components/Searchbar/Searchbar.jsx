import PropTypes from "prop-types";
import React, { Component } from "react";
import { toast } from "react-toastify";

class Searchbar extends Component {
  state = {
    name: "",
  };
  onSubmit  = (e) => {
    e.preventDefault();
    if (this.state.name.trim() === "") {
      toast.error("Not found!");
      return;
    }
    this.props.onSubmitForm(this.state.name);
  };
  onChangeName = (e) => {
    this.setState({ name: e.currentTarget.value.toLowerCase() });
  };
  render() {
    return (
      <header className="Searchbar">
        <form onSubmit ={this.onSubmit } className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            value={this.state.name}
            onChange={this.onChangeName}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
export default Searchbar;