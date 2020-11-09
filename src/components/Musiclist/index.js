import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { primaryColor } from '../../utils/colors';
import Card from '../Card';

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px 10px;

  h1.music-list-empty {
    font-size: 1.5rem;
    color: ${primaryColor};

    i {
      margin: 0 5px;
    }
  }
`;

function MusicList({ data }) {
  // TODO rever essa comparação
  const emptyData = data.length !== 0;

  return (
    <StyledList>
      {
        emptyData
          ? data.map((music) => (
            <li key={music.title}>
              <Card
                title={music.title}
                author={music.author}
                filename={music.filename}
              />
            </li>
          ))
          : (
            <h1 className="music-list-empty">
              <i className="far fa-frown" />
              Não há nada aqui
            </h1>
          )
      }
    </StyledList>
  );
}

MusicList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MusicList;
