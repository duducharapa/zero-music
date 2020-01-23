import React, { useState } from 'react';
import useAxios from 'axios-hooks';
import { Redirect } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Apresentation from '../../components/Apresentation';
import Footer from '../../components/Footer';
import Section from '../../components/Section';

const notfoundGif = require('../../images/notfoundmusic.gif');

export function Music({ location }){
     const { pathname } = location;
     const [{ loading, data, error }] = useAxios(
          `http://zero-music-api.herokuapp.com/music/${ pathname }`
     );

     // States
     const [ clicked, setClick ] = useState(false);

     // Handle functions
     const handleClick = () => setClick(true);
     
     return(
          <div>
               <Navbar location={ pathname } />
               <Apresentation location={ pathname } />

               {
                    loading ? (
                         <Section title="Carregando" icon="music">
                              <h1> carregando </h1>
                         </Section>
                    ) : error ? (
                         <Section title="Magia desconhecida" icon="times">
                              <div className="music">
                                   <h1 className="music-title-error" > 
                                        Opa! Parece que essa música ainda não foi encontrada 
                                   </h1>

                                   <img
                                        src={ notfoundGif } alt="Not found"
                                        className="music-gif-error"
                                   />

                                   <button className="music-btn-error" onClick={ handleClick }>
                                        Voltar as músicas
                                   </button>
                              </div>
                         </Section>
                    ) : (
                         <Section title={ data.title } icon="music">
                              <div className="music">
                                   <div className="music-info">
                                        <img 
                                             src={ `http://zero-music-api.herokuapp.com/images/${ data.filename }` } 
                                             alt={ data.title }
                                             className="music-thumb" 
                                        />

                                        <div className="music-author-content">
                                             <h1 className="music-author-label"> Autor: </h1>
                                             <h1 className="music-author-name"> { data.author } </h1>
                                        </div>
                                   </div>
                                   
                                   <audio controls className="music-player">
                                        <source 
                                             src={ `http://zero-music-api.herokuapp.com/musics/${ data.filename }` }
                                             type="audio/mp3"
                                        />
                                        Your browser not support this audio tag
                                   </audio>
                              </div>
                         </Section>
                    )
               }

               <Footer />

               { clicked ? <Redirect to="/musics" /> : null }
          </div>
     );
}