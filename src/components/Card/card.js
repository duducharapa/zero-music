import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

export function Card({ title, author }){

     const imgName = title.toLowerCase().split(' ').join('-');
     const image = require(`../../images/${imgName}.jpg`);

     return(
          <article className="music">
               <div className="music-header">
                    <h1 className="music-title"> { title } </h1>
               </div>
               <div className="music-body">
                    <img className="music-image" src={ image } alt={ title } />
               </div>
               <div className="music-footer">
                    <h2 className="music-author"> { author } </h2>
                    
                    <Button
                         text="Ouvir" href={`/music/${imgName}`}
                         icon="headphones" className="music-link" 
                    />
               </div>
          </article>
     );
}

Card.propTypes = {
     title: PropTypes.string.isRequired,
     author: PropTypes.string.isRequired
}