import React,{ useState, useEffect, useRef } from 'react';

import Navbar from '../../components/Navbar';
import Apresentation from '../../components/Apresentation';
import Section from '../../components/Section';
import Footer from '../../components/Footer';
import MusicList from '../../components/Musiclist';
import api from '../../services/api';

export function Home({ location }){
     const { pathname } = location;
     const ref = useRef(false);

     // States
     const [ musics, setMusics ] = useState([]);

     // Functions
     async function getData(){
          let musics = await api.get('/music/section');

          setMusics(musics.data);
     }

     useEffect(() => {
          if(!ref.current){
               getData();

               ref.current = true;
          }
     });

     return (
          <div>
               <Navbar location={ pathname } />
               <Apresentation location={ pathname } />

               <Section 
                    title="Dê um Break Up na sua rotina com:" icon="star"
               >
                    <MusicList data={ musics } />
               </Section>

               <Section 
                    title="Prefere músicas que estarão lá por você?" icon="heart"
               >
                    <MusicList data={ musics } />
               </Section>

               <Footer />
          </div>
     );
}