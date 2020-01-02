import React from 'react';
import PropTypes from 'prop-types';

export function Button({ href, icon, text }){
     return(
          <a href={ href } className="button">
               {
                    icon ?
                    <i className={ `fas fa-${icon}` } />
                    : null
               }

               { text }
          </a>
     )
}

Button.propTypes = {
     href: PropTypes.string.isRequired,
     icon: PropTypes.string,
     text: PropTypes.string.isRequired
}