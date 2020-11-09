import React from 'react';
import { FaFacebookSquare, FaEnvelope, FaGithubAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ color }) => color};

  a {
    color: ${({ color }) => color};
  }
`;

function SocialLink({
  icon, color, text, link,
}) {
  const chooseIcon = () => {
    const style = {
      margin: '0 5px 0 0',
    };
    switch (icon) {
      case 'email':
        return <FaEnvelope size={30} style={style} />;
      case 'facebook':
        return <FaFacebookSquare size={30} style={style} />;
      case 'github':
        return <FaGithubAlt size={30} style={style} />;
      default:
        return undefined;
    }
  };
  return (
    <StyledLink color={color}>
      {chooseIcon()}
      <a href={link}>
        {text}
      </a>
    </StyledLink>
  );
}

SocialLink.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SocialLink;
