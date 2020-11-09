import React, { useState, useEffect } from 'react';
import useAxios from 'axios-hooks';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Apresentation from '../../components/Apresentation';
import Section from '../../components/Section';
import MusicList from '../../components/Musiclist';
import SearchForm from '../../components/Searchform';

function Musics({ location }) {
  const { pathname } = location;
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
    <div>
      <Navbar location={pathname} />
      <Apresentation
        setFilter={(filt) => setFilter(filt)}
        location={pathname}
      />
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
      <Footer />
    </div>
  );
}

Musics.propTypes = {
  location: PropTypes.string.isRequired,
};

export default withRouter(Musics);
