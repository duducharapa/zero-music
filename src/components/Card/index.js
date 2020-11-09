import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { secondaryColor, textColor } from '../../utils/colors';

import Button from '../Button';

const StyledButton = styled(Button)`
  margin: 0 10px;
  align-self: flex-end;
`;

const StyledArticle = styled.article`
  width: 200px;
  margin-bottom: 20px;

  header, footer {
    background-color: ${secondaryColor}
  }

  header {
    padding: 5px;

    h1 {
      color: ${textColor};
      font-size: 1.2rem;
      text-align: center;
    }
  }

  img {
    width: 200px;
    height: 200px;
  }

  footer {
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 1rem;
      text-align: center;
      color: ${textColor};
      font-weight: 100;
      margin-bottom: 3px;
    }
  }
`;

function Card({ title, author, filename }) {
  const path = `/music/${filename}`;
  const imageURL = `https://zero-music-api.herokuapp.com/images/${filename}.jpg`;

  const [clicked, setClick] = useState(false);
  const handleClick = () => setClick(true);

  return (
    <StyledArticle>
      <header>
        <h1>
          {title}
        </h1>
      </header>
      <img alt={title} src={imageURL} />
      <footer>
        <h2>
          {author}
        </h2>
        <StyledButton
          text="Ouvir"
          onClick={handleClick}
          icon="headphones"
        />
      </footer>
      { clicked ? <Redirect to={path} /> : null }
    </StyledArticle>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
};

export default Card;
