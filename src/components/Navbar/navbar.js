import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { routes } from '../../helpers/routes';
const logoPath = require('../../images/louise.png');

export function Navbar({ location }){

     // States
     const [ clicked, setClick ] = useState(false);
     const [ path, setPath ] = useState("");

     // Handle functions
     const handleClick = path => {
          setPath(path);
          setClick(true);
     }

     return (
          <nav className="navbar">
               <a className="navbar-brand" href="/">
                    <img src={ logoPath } alt="Logo" className="navbar-logo" />
                    Zero music
               </a>

               <ul className="navbar-menu">
                    {
                         routes.map( ({ text, path }) => (
                              <li className="navbar-menu-item" key={ text }>
                                   <button 
                                        className={ `navbar-menu-link ${path === location ? 'active' : ''}` } 
                                        onClick={ () => handleClick(path) }
                                   > 
                                        { text } 
                                   </button>
                              </li>
                         ))
                    }
               </ul>

               { clicked ? <Redirect to={ path } /> : null }
          </nav>
     )

}