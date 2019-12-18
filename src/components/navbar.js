import React, { Component } from 'react';

export default class Navbar extends Component {     
     routes = [
          { text: "Início", path: "/" },
          { text: "Músicas", path: "/musics" },
          { text: "Sobre",path: "/about" }
     ]
     
     render() {
          const { location } = this.props;

          return (
               <nav className="navbar">
                    <a className="navbar-brand" href="/"> Zero music </a>

                    <ul className="navbar-menu">
                         { this.routes.map( ({ text, path }) => (
                              <li className="navbar-menu-item" key={ text }>
                                   <a 
                                        className={ `navbar-menu-link ${path === location ? 'active' : ''}` } 
                                        href={ path }
                                   > 
                                        { text } 
                                   </a>
                              </li>
                         )) }
                    </ul>
               </nav>
          )
     }
}
