import React from 'react';
import useAxios from 'axios-hooks';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import { withRouter } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Apresentation from '../../components/Apresentation';
import Section from '../../components/Section';
import Footer from '../../components/Footer';
import MusicList from '../../components/Musiclist';

function Home({ location }) {
  const { pathname } = location;
  const sections = [
    { title: 'Dê um Break Up na sua rotina com:', icon: 'star' },
    { title: 'Prefere músicas que estarão lá por você?', icon: 'heart' },
  ];
  const [{ data, loading }] = useAxios(
    'https://zero-music-api.herokuapp.com/section',
  );

  return (
    <div>
      <Navbar location={pathname} />
      <Apresentation location={pathname} />
      {
        sections.map(({ title, icon }) => (
          <Section title={title} icon={icon}>
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
                  <MusicList data={data} />
                )
            }
          </Section>
        ))
      }
      <Footer />
    </div>
  );
}

Home.propTypes = {
  location: PropTypes.string.isRequired,
};

export default withRouter(Home);
