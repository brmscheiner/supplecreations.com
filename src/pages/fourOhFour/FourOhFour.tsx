import React from 'react'
import Page from '../../components/Page';
import Title from '../../components/Title';
import Error from '../../assets/error.svg';

function FourOhFour(): JSX.Element {
  return <Page title="404" showTitle={false}>
    <img src={Error} style={{ width: 240, height: 240, marginLeft: -20 }} />
    <Title>404 error</Title>
    <p>The page you were looking for could not be found.</p>
  </Page>
}

export default FourOhFour;
