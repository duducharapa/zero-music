import React from 'react';

import Navbar from '../../components/Navbar';
import Apresentation from '../../components/Apresentation';
import Section from '../../components/Section';
import Footer from '../../components/Footer';
import MusicList from '../../components/Musiclist';

import { filterMusic } from '../../helpers/music-data';

export function Home({ location }){
     const { pathname } = location;

     return (
          <div>
               <Navbar location={ pathname } />
               <Apresentation location={ pathname } />

               <Section 
                    title="Dê um Break Up na sua rotina com:" icon="star"
               >
                    <MusicList data={ filterMusic("breakup") } />
               </Section>

               <Section 
                    title="Prefere músicas que estarão lá por você?" icon="heart"
               >
                    <MusicList data={ filterMusic("illbethere") } />
               </Section>

               <Footer />
          </div>
     );
}