import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
     render() {
          const { href, icon, text } = this.props;

          return (
               <a href={ href } className="button">
                    { icon ? 
                         <i className={ `fas fa-${icon}` } />
                    : null }
                    { text }
               </a>
          )
     }
}

Button.propTypes = {
     href: PropTypes.string.isRequired,
     icon: PropTypes.string,
     text: PropTypes.string.isRequired
}

export default Button;