import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';

export function MusicList({ data }){
     
     const emptyData = data.length !== 0;

     return(
          <ul className="music-list">
               {
                    emptyData ?
                         data.map(music => (
                              <li key={ music.title }>
                                   <Card
                                        title={ music.title } 
                                        author={ music.author }
                                        filename={ music.filename }
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
     );
}

MusicList.propTypes = {
     data: PropTypes.arrayOf(
          PropTypes.shape({
               title: PropTypes.string.isRequired,
               author: PropTypes.string.isRequired
          })
     ).isRequired
}