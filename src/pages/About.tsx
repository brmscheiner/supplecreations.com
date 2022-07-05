import React from 'react'

import Page from '../components/Page';
import LoadableImage from '../components/LoadableImage';
import ben from '../assets/ben.jpeg';

function About(): JSX.Element {
  return <Page title="About">
    <p>
      My name is Ben and I am a software engineer, designer and maker based in Portland, Oregon. 
    </p>
    <p>At the moment I work for Wild Me, an organization that builds open source software for conservation research. In the past I worked for a company that makes networking gear, a robotics cinematography startup, and even the Federal Reserve Board of Governors.</p>
    <LoadableImage width={500} imageObject={ben} alt="Ben in a suit" />
    <p>
      Subculture Creations is a website that I set up to show off some of the stuff I make. I chose the name Subculture because I feel 
    </p>
    <p>
      Feel free to get in touch with me if something here inspires you to do so. My email is brmscheiner@gmail.com
    </p>
  </Page>
}

export default About;
