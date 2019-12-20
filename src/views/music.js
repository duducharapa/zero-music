import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from '../components/navbar';
import Apresentation from '../components/apresentation';
import Footer from '../components/footer';
import Section from '../components/section';

import { getByRef } from '../helpers/music-data';

class Music extends Component {
     
     music = getByRef(this.props.location.pathname.split('/').reverse()[0]);
     
     render() {
          const { title, ref, author } = this.music;
          
          return (
               <div>
                    <Navbar location={ this.props.location.pathname } />
                    <Apresentation />

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
                                        src={ require(`../musics/${ ref }.mp3`) }
                                        type="audio/mp3"
                                   />
                                   Your browser not support this audio tag
                              </audio>
                         </div>
                    </Section>

                    <Footer />
               </div>
          )
     }
}

export default withRouter(Music);