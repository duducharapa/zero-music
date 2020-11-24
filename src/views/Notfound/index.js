import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { primaryColor, textColor } from '../../utils/colors';
import Section from '../../components/Section';
import Button from '../../components/Button';

const notfoundPath = require('../../images/notfound.gif');

const StyledDiv = styled.div`
  margin-bottom: 80px;  

  div.notfound {
    display: flex;
    flex-direction: column;
    background: ${textColor};
    padding: 5px;
    align-items: center;
  }

  h1.notfound-title {
    color: ${primaryColor};
    font-size: 2rem;
    text-align: center;
  }

  img.notfound-gif {
    margin: 10px auto;
    max-width: 90%;
  }

  @media screen and (max-width: 576px){
    h1.notfound-title {
      font-size: 1.5rem;
    }
  }
`;

function NotFound() {
  const [clicked, setClick] = useState(false);
  const handleClick = () => setClick(true);

  return (
    <StyledDiv>
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
    </StyledDiv>
  );
}

export default NotFound;
