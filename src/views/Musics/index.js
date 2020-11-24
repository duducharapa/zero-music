import React, { useState, useEffect } from 'react';
import useAxios from 'axios-hooks';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import Section from '../../components/Section';
import MusicList from '../../components/Musiclist';
import SearchForm from '../../components/Searchform';

const StyledDiv = styled.div`
  margin-bottom: 80px;
`;

function Musics({ location }) {
  const [{ data, loading }] = useAxios(
    'https://zero-music-api.herokuapp.com/musics',
  );
  const [musics, setMusics] = useState([]);
  const [filter, setFilter] = useState(
    location.state ? location.state.filter : '',
  );

  useEffect(() => {
    function filterMusics() {
      if (filter === '') {
        setMusics(data);
      } else {
        const filteredData = data.filter((item) => item.title.match(filter));
        setMusics(filteredData);
      }
    }

    if (data) filterMusics();
  }, [filter, data]);

  return (
    <StyledDiv>
      <Section title="Músicas disponíveis" icon="music">
        <SearchForm
          filter={filter}
          setFilter={(filt) => setFilter(filt)}
        />
        {
          loading
            ? (
              <ReactLoading
                color="#52489C"
                type="bubbles"
                width={100}
                height={30}
              />
            )
            : (
              <MusicList data={musics} />
            )
        }
      </Section>
    </StyledDiv>
  );
}

Musics.propTypes = {
  location: PropTypes.string.isRequired,
};

export default withRouter(Musics);
