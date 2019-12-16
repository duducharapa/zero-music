import React, { Component } from 'react'

export default class Navbar extends Component {
     render() {
          return (
               <nav className="navbar">
                    <a className="navbar-brand" href="/">
                         Zero music
                    </a>

                    <ul className="navbar-menu">
                         <li className="navbar-menu-item">
                              <a href="/"> Início </a>
                         </li>
                         <li className="navbar-menu-item">
                              <a href="/musics"> Músicas </a>
                         </li>
                         <li className="navbar-menu-item">
                              <a href="/about"> Sobre </a>
                         </li>
                    </ul>
               </nav>
          )
     }
}
