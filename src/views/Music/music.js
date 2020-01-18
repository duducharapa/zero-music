import React, { useState, useRef, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Apresentation from '../../components/Apresentation';
import Footer from '../../components/Footer';
import Section from '../../components/Section';
import api from '../../services/api';

const notfoundGif = require('../../images/notfoundmusic.gif');

export function Music({ location }){
     const { pathname } = location;

     const ref = useRef(false);
     const musicURL = useRef('');
     const imageURL = useRef('');

     // States
     const [ music, setMusic ] = useState(null);
     const [ clicked, setClick ] = useState(false);

     // Handle functions
     const handleClick = () => setClick(true);

     useEffect(() => {
          async function getData(){
               let apiResponse = await api.get(pathname);
     
               const { title, filename } = apiResponse.data;
     
               imageURL.current = `http://https://zero-music-api.herokuapp.com/images/${ filename }.jpg`;
               musicURL.current = `http://https://zero-music-api.herokuapp.com/musics/${ filename }.mp3`;
               
               return setMusic(title);
          }
          
          if(!ref.current){
               setTimeout(getData, 1000);

               ref.current = true;
          }
     },[pathname,music]);
     
     return(
          <div>
               <Navbar location={ pathname } />
               <Apresentation location={ pathname } />

               {
                    !ref.current ? (
                         <h1> loading </h1>
                    ) : music ? (
                         <Section title={ music } icon="music">
                              <div className="music">
                                   <div className="music-info">
                                        <img 
                                             src={ imageURL.current } alt={ music.title }
                                             className="music-thumb" 
                                        />

                                        <div className="music-author-content">
                                             <h1 className="music-author-label"> Autor: </h1>
                                             <h1 className="music-author-name"> { music.author } </h1>
                                        </div>
                                   </div>
                                   
                                   <audio controls className="music-player">
                                        <source 
                                             src={ musicURL.current }
                                             type="audio/mp3"
                                        />
                                        Your browser not support this audio tag
                                   </audio>
                              </div>
                         </Section>
                    ) : (
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
                    )
               }

               <Footer />

               { clicked ? <Redirect to="/musics" /> : null }
          </div>
     );
}