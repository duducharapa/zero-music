import React, { Component } from 'react';

import { routes } from '../helpers/routes';

export default class Footer extends Component {
     render() {
          return (
               <footer>
                    <nav>
                         <ul className="footer-menu">
                              {
                                   routes.map( ({ path, text }) => (
                                        <li className="footer-menu-item">
                                             <a href={ path } className="footer-menu-link">
                                                  { text }
                                             </a>
                                        </li>
                                   ))
                              }
                         </ul>
                    </nav>
                    <p className="footer-credits">
                         Copyright - Eduardo Charapa
                    </p>
               </footer>
          )
     }
}
