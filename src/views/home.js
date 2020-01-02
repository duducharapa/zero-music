import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from '../components/navbar';
import Apresentation from '../components/Apresentation';
import Section from '../components/section';
import Footer from '../components/Footer';
import MusicList from '../components/Musiclist';

import { filterMusic } from '../helpers/music-data';

class Home extends Component {

     render() {
          const { pathname } = this.props.location;

          return (
               <div>
                    <Navbar location={ pathname } />
                    <Apresentation location={ pathname } />

                    <Section 
                         title="Dê um Break Up na sua rotina com:"
                         icon="star"
                    >
                         <MusicList data={ filterMusic("breakup") } />
                    </Section>

                    <Section 
                         title="Prefere músicas que estarão lá por você?"
                         icon="heart"
                    >
                         <MusicList data={ filterMusic("illbethere") } />
                    </Section>

                    <Footer />
               </div>
          );
     }
}

export default withRouter(Home);