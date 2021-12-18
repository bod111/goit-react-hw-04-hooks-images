import PropTypes from "prop-types";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Searchbar = ({onSubmitForm})=> {
  const [name, setName] = useState("");
  
    
  const onSubmit  = (e) => {
    e.preventDefault();
    if (!name.trim()) toast.error("Not found!");
     
    onSubmitForm(name);
  };
  const onChangeName = (e) => {
   setName( e.currentTarget.value.toLowerCase() );
  };
 
    return (
      <header className="Searchbar">
        <form onSubmit ={onSubmit } className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            value={name}
            onChange={onChangeName}
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

Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
export default Searchbar;