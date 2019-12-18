import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from '../components/navbar';
import Apresentation from '../components/apresentation';
import Section from '../components/section';
import Footer from '../components/footer';
import MusicList from '../components/musiclist';

import { getBreakupMusics, getIllbethereMusics } from '../helpers/music-data';

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
                         <MusicList data={ getBreakupMusics() } />
                    </Section>

                    <Section 
                         title="Prefere músicas que estarão lá por você?"
                         icon="heart"
                    >
                         <MusicList data={ getIllbethereMusics() } />
                    </Section>

                    <Footer />
               </div>
          );
     }
}

export default withRouter(Home);