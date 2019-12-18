import React, { Component } from 'react';

import { routes } from '../helpers/routes';

export default class Navbar extends Component {     
     
     render() {
          const { location } = this.props;

          return (
               <nav className="navbar">
                    <a className="navbar-brand" href="/"> Zero music </a>

                    <ul className="navbar-menu">
                         {
                              routes.map( ({ text, path }) => (
                                   <li className="navbar-menu-item" key={ text }>
                                        <a 
                                             className={ `navbar-menu-link ${path === location ? 'active' : ''}` } 
                                             href={ path }
                                        > 
                                             { text } 
                                        </a>
                                   </li>
                              ))
                         }
                    </ul>
               </nav>
          )
     }
}
