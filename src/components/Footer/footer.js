import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { routes } from '../../helpers/routes';

export function Footer(){

     // States
     const [ clicked, setClick ] = useState(false);
     const [ path, setPath ] = useState("");

     // Handle functions
     const handleClick = path => {
          setPath(path);
          setClick(true);
     }

     return (
          <footer className="footer">
               <nav>
                    <ul className="footer-menu">
                         {
                              routes.map( ({ path, text }) => (
                                   <li key={ text } className="footer-menu-item">
                                        <button 
                                             className="footer-menu-link"
                                             onClick={ () => handleClick(path) }
                                        >
                                             { text }
                                        </button>
                                   </li>
                              ))
                         }
                    </ul>
               </nav>
               <p className="footer-credits">
                    Copyright - Eduardo Charapa
               </p>

               { clicked ? <Redirect to={ path } /> : null }
          </footer>
     );

}