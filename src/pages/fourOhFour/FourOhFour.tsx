import React from 'react'
import Page from '../../components/Page';
import Error from '../../assets/error.svg';

function FourOhFour(): JSX.Element {
  return <Page title="404" showTitle={false}>
    <img src={Error} style={{ width: 240, height: 240, marginLeft: -20 }} />
    <p className="title">404 error</p>
    <p>The page you were looking for could not be found.</p>
  </Page>
}

export default FourOhFour;
