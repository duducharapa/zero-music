import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.a`
     background-color: ${ ({ colors }) => colors[0] };
     padding: 7px;
     color: #EFF8E2;
     transition: background-color 0.4s;

     &:hover {
          background-color: ${ ({ colors }) => colors[1] };
          cursor: pointer;
     }

     i {
          margin: 0 5px;
     }
`;

export function Button({ onClick, icon, text, colors = ["#52489C","#2D2856"] }){
     return(
          <StyledButton colors={ colors } onClick={ onClick }>
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
     colors: PropTypes.arrayOf(PropTypes.string)
}