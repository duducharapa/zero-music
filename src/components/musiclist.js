import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from './card';

class MusicList extends Component {
     render() {
          return (
               <ul className="music-list">
                    {
                         this.props.data.map( (music, index) => (
                              <li key={ index }>
                                   <Card
                                        title={ music.title }
                                        author={ music.author }
                                   />
                              </li>
                         ))
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