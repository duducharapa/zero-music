import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { routes } from '../helpers/routes';

export default class Footer extends Component {
     
     state = {
          clicked: false,
          path: ''
     }

     handleClick = path => this.setState({ path, clicked: true });
     
     render() {
          const { clicked, path } = this.state;

          return (
               <footer>
                    <nav>
                         <ul className="footer-menu">
                              {
                                   routes.map( ({ path, text }) => (
                                        <li key={ text } className="footer-menu-item">
                                             <button 
                                                  className="footer-menu-link"
                                                  onClick={ () => this.handleClick(path) }
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
          )
     }
}
