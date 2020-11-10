import React, { useState } from 'react';
import useAxios from 'axios-hooks';
import { Redirect } from 'react-router-dom';

import Apresentation from '../../components/Apresentation';
import Section from '../../components/Section';
import parseLocation from '../../utils/parseLocation';

const notfoundGif = require('../../images/notfoundmusic.gif');

function Music() {
  const { pathname } = window.location;
  const [{ loading, data, error }] = useAxios(
    `https://zero-music-api.herokuapp.com/music/${parseLocation(pathname)}`,
  );
  const [clicked, setClick] = useState(false);
  const handleClick = () => setClick(true);

  return (
    <div>
      <Apresentation />

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
    </div>
  );
}

export default Music;
