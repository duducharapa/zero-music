import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {

     setMusic = event => this.props.setFilter(event.target.value);
     
     render() {
          const { filter } = this.props;

          return (
               <form className="searchform">
                    <input 
                         placeholder="Música" onChange={ this.setMusic } 
                         value={ filter } className="searchform-input"
                    />
               </form>
          )
     }
}

SearchForm.propTypes = {
     data: PropTypes.oneOf([
          PropTypes.arrayOf(
               PropTypes.shape({
                    title: PropTypes.string.isRequired,
                    author: PropTypes.string.isRequired
               })
          ).isRequired,

          PropTypes.shape({
               title: PropTypes.string.isRequired,
               author: PropTypes.string.isRequired
          })
     ])
}

export default SearchForm;