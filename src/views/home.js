import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from '../components/navbar';
import Apresentation from '../components/apresentation';
import Section from '../components/section';
import Music from '../components/music';
import Footer from '../components/footer';

import { getBreakupMusics, getIllbethereMusics } from '../helpers/music-data';

class Home extends Component {

     breakupMusics = getBreakupMusics();
     illbethereMusics = getIllbethereMusics();

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
                              {
                                   this.breakupMusics.map( (music, index) => (
                                        <li key={ index }>
                                             <Music
                                                  title={ music.title }
                                                  author={ music.author }
                                             />
                                        </li>
                                   ))
                              }
                         </ul>
                    </Section>

                    <Section 
                         title="Prefere músicas que estarão lá por você?"
                         icon="heart"
                    >
                         <ul className="music-list">
                              {
                                   this.illbethereMusics.map( (music, index) => (
                                        <li key={ index }>
                                             <Music
                                                  title={ music.title }
                                                  author={ music.author }
                                             />
                                        </li>
                                   ))
                              }
                         </ul>
                    </Section>

                    <Footer />
               </div>
          );
     }
}

export default withRouter(Home);