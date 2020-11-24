import React, { useState } from 'react';
import styled from 'styled-components';
import useAxios from 'axios-hooks';
import { Redirect } from 'react-router-dom';
import { darken } from 'polished';

import Section from '../../components/Section';
import parseLocation from '../../utils/parseLocation';
import { primaryColor, secondaryColor } from '../../utils/colors';

const notfoundGif = require('../../images/notfoundmusic.gif');

const StyledDiv = styled.div`
  margin-bottom: 80px;

  div.music {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    background: #EFF8E2;
  }

  div.music-info {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    margin: 10px auto;
  }

  img.music-thumb {
    width: 12rem;
    margin-right: 10px;
  }

  audio.music-player {
    width: 50%;
    height: 30px;
    border: 1px solid ${primaryColor};
  }

  h1.music-author-name, h1,music-author-label {
    font-weight: 100;
  }

  h1.music-author-label {
    color: ${primaryColor};
  }
  
  h1.music-author-name {
    color: ${secondaryColor};
  }
  
  h1.music-title-error {
    color: ${primaryColor};
    text-align: center;
  }

  img.music-gif-error {
    margin: 10px auto;
    max-width: 90%;
  }
  
  button.music-btn-error {
    padding: 8px;
    border: none;
    border-radius: 5px;
    color: #EFF8E2;
    background: ${primaryColor};
    transition: all 0.4s;
  
    &:hover {
      cursor: pointer;
      background: ${darken(0.2, primaryColor)};
    }
  }

  @media screen and (max-width: 576px){
    audio.music-player {
      width: 80%;
    }
  
    div.music-info {
      justify-content: space-around;
    }
  }
`;

function Music() {
  const { pathname } = window.location;
  const [{ loading, data, error }] = useAxios(
    `https://zero-music-api.herokuapp.com/music/${parseLocation(pathname)}`,
  );
  const [clicked, setClick] = useState(false);
  const handleClick = () => setClick(true);

  return (
    <StyledDiv>
      {
        // TODO: Remover este ternário aninhado
        loading //eslint-disable-line
          ? (
            <Section title="Carregando" icon="music">
              <h1> carregando </h1>
            </Section>
          )
          : error || !data
            ? (
              <Section title="Magia desconhecida" icon="times">
                <div className="music">
                  <h1 className="music-title-error">
                    Opa! Parece que essa música ainda não foi encontrada
                  </h1>
                  <img
                    src={notfoundGif}
                    alt="Not found"
                    className="music-gif-error"
                  />

                  <button
                    type="button"
                    className="music-btn-error"
                    onClick={handleClick}
                  >
                    Voltar as músicas
                  </button>
                </div>
              </Section>
            ) : (
              <Section title={data.title} icon="music">
                <div className="music">
                  <div className="music-info">
                    <img
                      src={`https://zero-music-api.herokuapp.com/images/${data.filename}.jpg`}
                      alt={data.title}
                      className="music-thumb"
                    />

                    <div className="music-author-content">
                      <h1 className="music-author-label">
                        Autor:
                      </h1>
                      <h1 className="music-author-name">
                        {data.author}
                      </h1>
                    </div>
                  </div>
                  <audio controls className="music-player">
                    <track kind="captions" />
                    <source
                      src={`https://zero-music-api.herokuapp.com/musics/${data.filename}.mp3`}
                      type="audio/mp3"
                    />
                    Your browser not support this audio tag
                  </audio>
                </div>
              </Section>
            )
      }
      { clicked ? <Redirect to="/musics" /> : null }
    </StyledDiv>
  );
}

export default Music;
