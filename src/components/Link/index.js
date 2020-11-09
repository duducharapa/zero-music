import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  color: ${({ color }) => color}

  &:hover {
    cursor: pointer;
  }
`;

function Link({ to, text, color }) {
  const [clicked, setClick] = useState(false);
  const handleClick = () => setClick(true);

  return (
    <StyledButton color={color} onClick={handleClick}>
      {text}
      { clicked ? <Redirect to={to} /> : null }
    </StyledButton>
  );
}

Link.defaultProps = {
  color: '#EFF8E2',
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Link;
