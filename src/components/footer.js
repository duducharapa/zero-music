import React, { Component } from 'react'

export default class Footer extends Component {
     render() {
          return (
               <footer>
                    <nav>
                         <ul className="footer-menu">
                              <li className="footer-menu-item">
                                   <a href="/" className="footer-menu-link">
                                        Início
                                   </a>
                              </li>
                              <li className="footer-menu-item">
                                   <a href="/musics" className="footer-menu-link">
                                        Músicas
                                   </a>
                              </li>
                              <li className="footer-menu-item">
                                   <a href="/about" className="footer-menu-link">
                                        Sobre
                                   </a>
                              </li>
                         </ul>
                    </nav>
                    <p className="footer-credits">
                         Copyright - Eduardo Charapa
                    </p>
               </footer>
          )
     }
}
