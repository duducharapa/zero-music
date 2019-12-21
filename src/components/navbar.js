import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { routes } from '../helpers/routes';

const logoPath = require('../images/louise.png');

export default class Navbar extends Component {     
     
     state = {
          clicked: false,
          path: ''
     }

     handleClick = path => this.setState({ clicked: true, path });

     render() {
          const { location } = this.props;
          const { clicked, path } = this.state;

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
                                             onClick={ () => this.handleClick(path) }
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
}
