import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Apresentation from '../components/Apresentation';
import Section from '../components/section';
import MusicList from '../components/musiclist';
import SearchForm from '../components/searchform';

import { filterMusic, matchMusic } from '../helpers/music-data';

class Musics extends Component {
     
     constructor(props){
          const { location } = props;
          super(props);

          this.state = {
               filter: location.state ? location.state.filter : ''
          }
     }

     data = filterMusic();

     componentWillUpdate(nextProps, nextState){
          const { filter } = nextState;
          
          this.updateList(filter);
     }

     updateList = filter => {
          if(filter === '')
               this.data = filterMusic();
          else{
               this.data = matchMusic(filter);
          }
     }

     componentWillMount(){
          if(this.props.location.state)
               this.updateList(this.props.location.state.filter);
     }

     setFilter = filter => this.setState({ filter });

     render() {
          const { filter } = this.state,
               { pathname } = this.props.location;

          return (
               <div>
                    <Navbar location={ pathname } />
                    <Apresentation 
                         setFilter={ filter => this.setFilter(filter) }
                         location={ pathname }
                    />

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