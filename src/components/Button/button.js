import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.a`
     background: ${ ({ color }) => color };
     padding: 5px;
     color: #EFF8E2;
     transition: all 0.4s;

     &:hover {
          background: darken(${ ({ color }) => color },20%);
          cursor: pointer;
     }

     i {
          margin: 0 5px;
     }
`;

export function Button({ onClick, icon, text, color = "#52489C" }){
     return(
          <StyledButton color={ color } onClick={ onClick }>
               {
                    icon ?
                    <i className={ `fas fa-${icon}` } />
                    : null
               }

               { text }
          </StyledButton>
     )
}

Button.propTypes = {
     onClick: PropTypes.func,
     icon: PropTypes.string,
     text: PropTypes.string.isRequired,
     color: PropTypes.string
}