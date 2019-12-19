import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Apresentation from '../components/apresentation';
import Section from '../components/section';
import MusicList from '../components/musiclist';
import SearchForm from '../components/searchform';

import { filterMusic, matchMusic } from '../helpers/music-data';

class Musics extends Component {
     
     state = {
          filter: ''
     }

     data = filterMusic();

     setFilter = filter => {
     
          if(filter === '')
               this.data = filterMusic();
          else{
               this.data = matchMusic(filter);
          }

          this.setState({ filter });
     }

     render() {
          const { filter } = this.state;

          return (
               <div>
                    <Navbar location={ this.props.location.pathname } />
                    <Apresentation />

                    <Section title="Músicas disponíveis" icon="music">
                         <SearchForm 
                              filter={ filter } 
                              setFilter={ filter => this.setFilter(filter) } 
                         />
                         <MusicList data={ this.data } />
                    </Section>

                    <Section title="Recomendadas" icon="thumbs-up">
                         <MusicList data={ filterMusic("recommended") } />
                    </Section>

                    <Footer />
               </div>
          )
     }
}

export default withRouter(Musics);