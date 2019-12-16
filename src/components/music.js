import React, { Component } from 'react'

export default class Music extends Component {
     
     constructor(props){
          super(props);

          this.imgName = props.title.toLowerCase().split(' ').join('-');
          this.image = require(`../images/${this.imgName}.jpg`);
     }
     
     render() {
          const { title, author } = this.props;

          return (
               <article className="music">
                    <a href={ `/musics/${this.imgName}` } className="music-anchor">
                         <img className="music-image" src={ this.image } alt={ title } />
                    </a>

                    <div className="music-info">
                         <h1 className="music-title"> { title } </h1>
                         <h2 className="music-author"> { author } </h2>
                    </div>
               </article>
          )
     }
}
