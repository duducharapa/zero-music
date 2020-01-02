import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

class Card extends Component {
     
     constructor(props){
          super(props);

          this.imgName = props.title.toLowerCase().split(' ').join('-');
          this.image = require(`../images/${this.imgName}.jpg`);
     }
     
     render() {
          const { title, author } = this.props;

          return (
               <article className="music">
                    <div className="music-header">
                         <h1 className="music-title"> { title } </h1>
                    </div>
                    <div className="music-body">
                         <img className="music-image" src={ this.image } alt={ title } />
                    </div>
                    <div className="music-footer">
                         <h2 className="music-author"> { author } </h2>
                         <Button
                              text="Ouvir" href={`/music/${this.imgName}`}
                              icon="headphones" className="music-link" 
                         />
                    </div>
               </article>
          )
     }
}

Card.propTypes = {
     title: PropTypes.string.isRequired,
     author: PropTypes.string.isRequired
}

export default Card;