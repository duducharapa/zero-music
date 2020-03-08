import React from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Section from '../../components/Section';
import Apresentation from '../../components/Apresentation';
import SocialLink from '../../components/SocialLink';

const devIcon = require('../../images/charapa.jpg');

export function About({ location }){
     const { pathname } = location;

     return(
          <div>
               <Navbar location={ pathname } />
               <Apresentation location={ pathname } />

               <Section title="One-man army" icon="users">
                    <div className="section-dev">
                         <img 
                              src={ devIcon } alt="Eduardo Charapa" 
                              className="section-dev-image" 
                         />

                         <div className="section-dev-info">
                              <h1 className="section-dev-name"> Eduardo Charapa </h1>

                              <p className="section-dev-description">
                                   Atualmente possui foco no desenvolvimento de sistemas web, tanto utilizando PHP quando Javascript.
                                   Apesar disso, possui atuação no campo mobile e desktop, com perspectiva para muito mais!
                              </p>

                              <ul>
                                   <li>
                                        <SocialLink 
                                             icon="facebook" link="https://facebook.com/eduardo.charapa" text="Eduardo Charapa"
                                             color="#474787"
                                        />
                                   </li>
                                   <li>
                                        <SocialLink 
                                             icon="email" link="mailto:eduardocharapa@gmail.com" text="Eduardocharapa@gmail.com"
                                             color="#ee5253"
                                        />
                                   </li>
                                   <li>
                                        <SocialLink 
                                             icon="github" link="https://github.com/duducharapa" text="Eduardocharapa@gmail.com"
                                             color="#222f3e"
                                        />
                                   </li>
                              </ul>
                         </div>
                    </div>
               </Section>

               <Section title="Por que o Zero music?" icon="question-circle">
                    <div className="section-about">
                         <p className="section-about-text">
                              O Zero Music é um projeto de portifólio visando melhorar a prática
                              no front-end e demonstrar algumas habilidades já adquiridas. Espero que goste!
                         </p>
                    </div>
               </Section>

               <Footer />
          </div>
     );
}