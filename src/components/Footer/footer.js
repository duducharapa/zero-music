import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { routes } from '../../helpers/routes';
import styled from 'styled-components';

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

     button {
          background: none;
          border: none;
          color: #EFF8E2;
          font-size: 1rem;

          &:hover {
               cursor: pointer;
          }
     }

     p {
          text-align: center;
          color: #C6962D;
     }
`;

export function Footer(){

     // States
     const [ clicked, setClick ] = useState(false);
     const [ path, setPath ] = useState("");

     // Handle functions
     const handleClick = path => {
          setPath(path);
          setClick(true);
     }

     return (
          <StyledFooter>
               <ul>
                    {
                         routes.map( ({ path, text }) => (
                              <li key={ text }>
                                   <button onClick={ () => handleClick(path) }>
                                        { text }
                                   </button>
                              </li>
                         ))
                    }
               </ul>

               <p> Copyright - Eduardo Charapa </p>

               { clicked ? <Redirect to={ path } /> : null }
          </StyledFooter>
     );

}