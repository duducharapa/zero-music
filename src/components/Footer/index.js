import React from 'react';
import styled from 'styled-components';

import { routes } from '../../helpers/routes';
import { primaryColor, secondaryColor, terciaryColor } from '../../utils/colors';

import Link from '../Link';

const StyledFooter = styled.footer`
  padding: 50px 0px 5px 0px;
  background: linear-gradient(${secondaryColor},${primaryColor});

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 5px 0;

    li {
      margin: 0 5px;
    }
  }

  p {
    text-align: center;
    color: ${terciaryColor};
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <ul>
        {
          routes.map(({ path, text }) => (
            <li key={text}>
              <Link to={path} text={text} />
            </li>
          ))
        }
      </ul>

      <p> Copyright - Eduardo Charapa </p>
    </StyledFooter>
  );
}

export default Footer;
