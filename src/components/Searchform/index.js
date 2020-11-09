import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { textColor, primaryColor } from '../../utils/colors';

const StyledForm = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  background: ${textColor};

  input {
    font-size: 1rem;
    font-color: ${primaryColor};
    margin-top: 10px;
    width: 70%;
    height: 30px;
    padding: 5px;
    border: solid 1px ${primaryColor};
    border-radius: 5px;
    
    &::placeholder{
      color: ${primaryColor};
    }
  }
`;

function SearchForm({ setFilter, filter }) {
  const handleChange = (event) => setFilter(event.target.value);

  return (
    <StyledForm>
      <input
        placeholder="Música"
        onChange={handleChange}
        value={filter}
      />
    </StyledForm>
  );
}

SearchForm.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default SearchForm;
