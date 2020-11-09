import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  primaryColor, terciaryColor, secondaryColor, textColor,
} from '../../utils/colors';

const StyledSection = styled.section`
  padding: 20px 20px 50px 20px;
  background: ${secondaryColor};
     
  header.section-header {
    background-color: ${primaryColor};
    word-break: break-word;
    padding: 10px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;

    i {
      font-size: 1.8rem;
      font-weight: bold;
      margin: 0 10px;
      color: ${terciaryColor};
    }

    h1 {
      font-size: 1.4rem;
      color: ${textColor}
    }
  }

  div.section-body {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    background-color: ${textColor};
  }
`;

function Section({ title, icon, children }) {
  return (
    <StyledSection>
      <header className="section-header">
        <i className={`fas fa-${icon}`} />
        <h1>
          {title}
        </h1>
      </header>
      <div className="section-body">
        {children}
      </div>
    </StyledSection>
  );
}

Section.defaultProps = {
  title: '',
  icon: '',
};

Section.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element, PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Section;
