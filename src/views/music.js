import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Apresentation from '../components/Apresentation';
import Footer from '../components/Footer';
import Section from '../components/Section';

import { getByRef } from '../helpers/music-data';

const notfoundGif = require('../images/notfoundmusic.gif');

class Music extends Component {
     
     constructor(props){
          super(props);
          let error = false;

          this.music_info = getByRef(
               this.props.location.pathname.split('/').reverse()[0]
          );

          let { ref } = this.music_info;

          try{
               this.music = require(`../musics/${ ref }.mp3`);
          }catch(ex){
               console.log(ex);
               error = true;
          }

          this.state = { error, redirect: false };
     }

     handleClick = () => this.setState({ redirect: true });

     render() {
          const { title, ref, author } = this.music_info,
               { pathname } = this.props.location,
               { error, redirect } = this.state;
          
          return (
               <div>
                    <Navbar location={ pathname } />
                    <Apresentation location={ pathname } />

                    {
                         !error ? (
                              <Section title={ title } icon="music">
                                   <div className="music">
                                        <div className="music-info">
                                             <img 
                                                  src={ require(`../images/${ ref }.jpg`) } 
                                                  className="music-thumb" alt={ title }
                                             />

                                             <div className="music-author-content">
                                                  <h1 className="music-author-label"> Autor: </h1>
                                                  <h1 className="music-author-name"> { author } </h1>
                                             </div>
                                        </div>
                                        
                                        <audio controls className="music-player">
                                             <source 
                                                  src={ this.music }
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

                                        <button className="music-btn-error" onClick={ this.handleClick }>
                                             Voltar as músicas
                                        </button>
                                   </div>
                              </Section>
                         )
                    }

                    <Footer />

                    { redirect ? <Redirect to="/musics" /> : null }
               </div>
          )
     }
}

export default withRouter(Music);