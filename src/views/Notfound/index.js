import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Apresentation from '../../components/Apresentation';
import Section from '../../components/Section';
import Button from '../../components/Button';

const notfoundPath = require('../../images/notfound.gif');

function NotFound() {
  const [clicked, setClick] = useState(false);
  const handleClick = () => setClick(true);

  return (
    <div>
      <Apresentation />
      <Section title="Magia desconhecida!" icon="times">
        <div className="notfound">
          <h1 className="notfound-title">
            Oops! Parece que você tentou utilizar uma página inexistente!
          </h1>
          <img
            src={notfoundPath}
            alt="Not found"
            className="notfound-gif"
          />
          <Button
            onClick={handleClick}
            text="Voltar a página inicial"
          />
          { clicked ? <Redirect to="/" /> : null }
        </div>
      </Section>
    </div>
  );
}

export default NotFound;
