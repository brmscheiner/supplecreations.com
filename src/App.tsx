import React from 'react';
import {
  BrowserRouter,
  // HashRouter,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';
import useIsNarrowScreen from './hooks/useIsNarrowScreen';
import articleData from './constants/articleData';
import ScrollHelper from './components/ScrollHelper';
import MultiMedia from './components/MultiMedia';
import Header from './components/Header';
import Page from './components/Page';
import Home from './pages/home/Home';
import About from './pages/about/About';
import WorkHistory from './pages/workHistory/WorkHistory';
import FourOhFour from './pages/fourOhFour/FourOhFour';

function App(): JSX.Element {
  // const RouterComponent = __DEV__ ? BrowserRouter : HashRouter;
  const RouterComponent = BrowserRouter;

  const isNarrowScreen = useIsNarrowScreen();
  console.log(isNarrowScreen);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <RouterComponent basename="/">
          <Header isNarrowScreen={isNarrowScreen} />
          <ScrollHelper />
          <Switch>
            {articleData.map(article => (
              <Route key={article.title} path={`/articles/${article.href}`}>
                <Page title={article.title}>
                  <MultiMedia data={article.content} />
                </Page>
              </Route>
            ))}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/work-history">
              <WorkHistory />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route>
              <FourOhFour />
            </Route>
          </Switch>
        </RouterComponent>
    </div>
  );
}

export default App;
