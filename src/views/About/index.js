import React from 'react';
import styled from 'styled-components';

import Section from '../../components/Section';
import SocialLink from '../../components/SocialLink';
import { primaryColor } from '../../utils/colors';

const devIcon = require('../../images/charapa.jpg');

const StyledDiv = styled.div`
  margin-bottom: 80px;

  div.section-about, div.section-dev {
    background: #EFF8E2;
    padding: 5px;
    word-break: break-word;
  }

  div.section-dev {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    i {
      font-size: 1.5rem;
      margin-right: 10px;
    }
  }

  h1.section-dev-name {
    color: ${primaryColor};
  }

  img.section-dev-image {
    width: 150px;
  }

  div.section-dev-info {
    margin-left: 10px;
  }

  p.section-dev-description, p.section-about-text {
    color: grey;
    word-break: break-word;
    text-align: justify;
    margin: 5px 0;
  }
`;

function About() {
  return (
    <StyledDiv>
      <Section title="One-man army" icon="users">
        <div className="section-dev">
          <img
            src={devIcon}
            alt="Eduardo Charapa"
            className="section-dev-image"
          />

          <div className="section-dev-info">
            <h1 className="section-dev-name"> Eduardo Charapa </h1>
            <p className="section-dev-description">
              Atualmente possui foco no desenvolvimento de sistemas web, tanto utilizando PHP quanto
              Javascript.
              Apesar disso, possui atuação no campo mobile e desktop, com perspectiva para muito
              mais!
            </p>
            <ul>
              <li>
                <SocialLink
                  icon="facebook"
                  link="https://facebook.com/eduardo.charapa"
                  text="Eduardo Charapa"
                  color="#474787"
                />
              </li>
              <li>
                <SocialLink
                  icon="email"
                  link="mailto:eduardocharapa@gmail.com"
                  text="Eduardocharapa@gmail.com"
                  color="#ee5253"
                />
              </li>
              <li>
                <SocialLink
                  icon="github"
                  link="https://github.com/duducharapa"
                  text="Eduardocharapa@gmail.com"
                  color="#222f3e"
                />
              </li>
            </ul>
          </div>
        </div>
      </Section>
      <Section title="Por que o Zero music?" icon="question-circle">
        <div className="section-about">
          <p className="section-about-text">
            O Zero Music é um projeto de portifólio visando melhorar a prática
            no front-end e demonstrar algumas habilidades já adquiridas. Espero que goste!
          </p>
        </div>
      </Section>
    </StyledDiv>
  );
}

export default About;
