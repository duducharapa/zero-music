import React, { useState, useEffect } from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Apresentation from '../../components/Apresentation';
import Section from '../../components/Section';
import MusicList from '../../components/Musiclist';
import SearchForm from '../../components/Searchform';

import { filterMusic, matchMusic } from '../../helpers/music-data';

export function Musics({ location }){
     const { pathname } = location;

     // States
     const [ data, setData ] = useState(filterMusic);
     const [ filter, setFilter ] = useState(
          location.state ? location.state.filter : ''
     );

     // Update function
     const updateList = () => {
          setData(filter === '' ? filterMusic() : matchMusic(filter));
     }

     useEffect( updateList, [filter] );

     return (
          <div>
               <Navbar location={ pathname } />
               
               <Apresentation 
                    setFilter={ filter => setFilter(filter) } location={ pathname }
               />

               <Section title="Músicas disponíveis" icon="music">
                    <SearchForm 
                         filter={ filter } 
                         setFilter={ filter => setFilter(filter) } 
                    />

                    <MusicList data={ data } />
               </Section>

               <Section title="Recomendadas" icon="thumbs-up">
                    <MusicList data={ filterMusic("recommended") } />
               </Section>

               <Footer />
          </div>
     );
}