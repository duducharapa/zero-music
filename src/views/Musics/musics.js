import React, { useState, useEffect, useRef } from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Apresentation from '../../components/Apresentation';
import Section from '../../components/Section';
import MusicList from '../../components/Musiclist';
import SearchForm from '../../components/Searchform';
import api from '../../services/api';

export function Musics({ location }){
     const { pathname } = location;
     const ref = useRef(false);
     const data = useRef([]);

     // States
     const [ musics, setMusics ] = useState([]);
     const [ filter, setFilter ] = useState(
          location.state ? location.state.filter : ''
     );

     useEffect(() => {
          async function getData(){
               const musics = await api.get('/music');

               data.current = musics.data;
               return;
          }

          function filterMusics(){
               if(filter === ''){
                    setMusics(data.current);
               }else{
                    let filteredData = data.current.filter(item => {
                         return item.title.match(filter);
                    });

                    setMusics(filteredData);
               }
          }
          
          if(!ref.current){
               setTimeout(getData, 1000);
               ref.current = true;
          }
               
          filterMusics();
     }, [filter]);

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

                    <MusicList data={ musics } />
               </Section>

               

               <Footer />
          </div>
     );
}