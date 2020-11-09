import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { textColor } from '../../utils/colors';

const StyledButton = styled.a`
  background-color: ${({ colors }) => colors[0]};
  padding: 7px;
  color: ${textColor};
  transition: background-color 0.4s;

  &:hover {
    background-color: ${({ colors }) => colors[1]};
    cursor: pointer;
  }

  i {
    margin: 0 5px;
  }
`;

function Button({
  onClick, icon, text, colors,
}) {
  return (
    <StyledButton colors={colors} onClick={onClick}>
      {
        icon
          ? <i className={`fas fa-${icon}`} />
          : null
      }
      { text }
    </StyledButton>
  );
}

Button.defaultProps = {
  onClick: () => {},
  icon: '',
  colors: ['#52489C', '#2D2856'],
};

Button.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string),
};

export default Button;
