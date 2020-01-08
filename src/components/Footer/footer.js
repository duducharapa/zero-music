import React from 'react';
import { routes } from '../../helpers/routes';
import styled from 'styled-components';

import Link from '../Link';

// Styled Components
const StyledFooter = styled.footer`
     padding: 50px 0px 5px 0px;
     background: linear-gradient(#AB87FF,#52489C);

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
          color: #C6962D;
     }
`;

export function Footer(){

     return (
          <StyledFooter>
               <ul>
                    {
                         routes.map( ({ path, text }) => (
                              <li key={ text }>
                                   <Link to={ path } text={ text } />
                              </li>
                         ))
                    }
               </ul>

               <p> Copyright - Eduardo Charapa </p>
          </StyledFooter>
     );

}