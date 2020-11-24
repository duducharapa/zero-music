import React from 'react';
import useAxios from 'axios-hooks';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

import Section from '../../components/Section';
import MusicList from '../../components/Musiclist';

const StyledDiv = styled.div`
  margin-bottom: 80px;
`;

function Home() {
  const sections = [
    { title: 'Dê um Break Up na sua rotina com:', icon: 'star' },
    { title: 'Prefere músicas que estarão lá por você?', icon: 'heart' },
  ];
  const [{ data, loading }] = useAxios(
    'https://zero-music-api.herokuapp.com/section',
  );

  return (
    <StyledDiv>
      {
        sections.map(({ title, icon }) => (
          <Section title={title} icon={icon} key={title}>
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
    </StyledDiv>
  );
}

export default Home;
