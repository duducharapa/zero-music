import React, { Component } from 'react';
import PropTypes from 'prop-types';

export function SearchForm({ setFilter, filter }){

     // Handle functions
     const handleChange = event => setFilter(event.target.value);

     return (
          <form className="searchform">
               <input 
                    placeholder="Música" onChange={ handleChange } 
                    value={ filter } className="searchform-input"
               />
          </form>
     )
}

SearchForm.propTypes = {
     filter: PropTypes.string.isRequired,
     setFilter: PropTypes.func.isRequired
}