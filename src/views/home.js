import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from '../components/navbar';
import Apresentation from '../components/apresentation';
import Section from '../components/section';
import Music from '../components/music';
import Footer from '../components/footer';

class Home extends Component {
     render() {
          return (
               <div>
                    <Navbar location={ this.props.location.pathname } />
                    <Apresentation />

                    <Section 
                         title="Dê um Break Up na sua rotina com:"
                         icon="star"
                    >
                         <ul className="music-list">
                              <li>
                                   <Music 
                                        title="Break up" author="Digimon" 
                                   />
                              </li>
                              <li>
                                   <Music 
                                        title="LIVE for LIFE" author="Ben-to" 
                                   />
                              </li>
                              <li>
                                   <Music 
                                        title="Taiyo Iwaku Moeyo Chaos" 
                                        author="Haiyore! Nyaruko-san"
                                   /> 
                              </li>
                              <li>
                                   <Music 
                                        title="Hyadain no Kakakata Kataomoi-C"
                                        author="Nichijou"
                                   />
                              </li>
                         </ul>
                    </Section>

                    <Section 
                         title="Prefere músicas que estarão lá por você?"
                         icon="heart"
                    >
                         <ul className="music-list">
                              <li>
                                   <Music title="Ill be there for you" author="Ichiko" />
                              </li>
                              <li>
                                   <Music title="Golden Time" author="Yui Hiroe" />
                              </li>
                              <li>
                                   <Music title="Kuchizuke Diamond" author="Weaver" />
                              </li>
                              <li>
                                   <Music title="Your reality" author="Dan Salvato" />
                              </li>
                         </ul>
                    </Section>

                    <Footer />
               </div>
          );
     }
}

export default withRouter(Home);