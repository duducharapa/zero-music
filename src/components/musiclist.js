import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

class MusicList extends Component {
     render() {
          return (
               <ul className="music-list">
                    {
                         this.props.data.length !== 0 ?
                              this.props.data.map( music => (
                                   <li key={ music.title }>
                                        <Card
                                             title={ music.title }
                                             author={ music.author }
                                        />
                                   </li>
                              ))
                         :
                         <h1 className="music-list-empty">
                              <i className="far fa-frown" />
                              Não há nada aqui
                         </h1>
                    }
               </ul>
          )
     }
}

MusicList.propTypes = {
     data: PropTypes.arrayOf(
          PropTypes.shape({
               title: PropTypes.string.isRequired,
               author: PropTypes.string.isRequired
          })
     ).isRequired
}

export default MusicList;