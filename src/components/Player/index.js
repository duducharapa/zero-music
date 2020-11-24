import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

import { primaryColor, textColor } from '../../utils/colors';
import image from '../../images/believer.jpg';

const StyledDiv = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  left: 0;
  bottom: 0;
  padding: 5px;
  width: 100%;
  height: 80px;
  background: ${primaryColor};

  img {
    width: 60px;
  }

  h3 {
    color: ${textColor};
    font-weight: 100;
    margin-left: 20px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 10px;
  }

  button {
    border: none;
    background: none;
    margin-right: 10px;
    &:hover {
      cursor: pointer;

      i {
        color: ${darken(0.2, primaryColor)};
      }
    }
  }

  i.fa-list-alt {
    transition: color 0.3s;
    font-size: 2.5rem;
    color: ${textColor};
  }
`;

function Player() {
  return (
    <StyledDiv>
      <div>
        <img src={image} alt="Music logo" />
        <h3>
          Believer
        </h3>
      </div>
      <div>
        <h1>a</h1>
      </div>
      <button type="button">
        <i className="far fa-list-alt" />
      </button>
    </StyledDiv>
  );
}

export default Player;
