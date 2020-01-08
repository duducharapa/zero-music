import React,{ useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components
const StyledButton = styled.button`
     background: none;
     border: none;
     font-size: 1rem;
     color: ${ ({ color }) => color }

     &:hover {
          cursor: pointer;
     }
`;

export function Link({ to, text, color = "#EFF8E2" }){

     // States
     const [ clicked, setClick ] = useState(false);

     // Handle functions
     const handleClick = () => setClick(true);

     return(
          <StyledButton color={ color } onClick={ handleClick }>
               { text } 

               { clicked ? <Redirect to={ to } /> : null }
          </StyledButton>
     );

}

Link.propTypes = {
     to: PropTypes.string.isRequired,
     text: PropTypes.string.isRequired,
     color: PropTypes.string
}