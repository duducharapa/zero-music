import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import {
  primaryColor, secondaryColor, terciaryColor, textColor,
} from '../../utils/colors';

const StyledApresentation = styled.div`
  padding: 20px;
  background: linear-gradient(${primaryColor},${secondaryColor});
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }

  div {
    margin-bottom: 50px;
  }

  h1.name, h1.subname {
    text-align: center;
  }

  h1.name {
    color: ${primaryColor};
    font-size: 5rem;
    font-weight: bold;
    font-family: 'Dancing script', cursive;
    text-shadow: 0px 0px 5px ${terciaryColor};
  }

  h1.subname {
    color: ${textColor};
    font-size: 1.7rem;
  }

  input {
    width: 80%;
    height: 40px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    color: ${primaryColor};

    &::placeholder{
      color: ${primaryColor};
    }
  }

  @media screen and (max-width: 576px){
    h1.name { 
      font-size: 4.2rem; 
    }

    h1.subname { 
      font-size: 1.4rem; 
    }

    input { 
      width: 100%; 
    }
  }
`;

function Apresentation() {
  const [music, setMusic] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { pathname } = window.location;

  const handleChange = (event) => {
    setMusic(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRedirect(true);
  };

  return (
    <StyledApresentation>
      <div>
        <h1 className="name"> Zero Music </h1>
        <h1 className="subname"> A mágica da música está aqui! </h1>
      </div>
      {
        !pathname.match('/musics')
          ? (
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                placeholder="Qual soneto buscas?"
                value={music}
              />
            </form>
          )
          : null
      }
      {
        redirect
          ? <Redirect to={{ pathname: '/musics', state: { filter: music } }} />
          : null
      }
    </StyledApresentation>
  );
}

export default Apresentation;
