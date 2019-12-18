import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Apresentation from '../components/apresentation';
import Section from '../components/section';
import MusicList from '../components/musiclist';

import { getAll } from '../helpers/music-data';

class Musics extends Component {
     render() {
          return (
               <div>
                    <Navbar location={ this.props.location.pathname } />
                    <Apresentation />

                    <Section title="Músicas disponíveis" icon="music">
                         <MusicList data={ getAll() } />
                    </Section>

                    <Footer />
               </div>
          )
     }
}

export default withRouter(Musics);