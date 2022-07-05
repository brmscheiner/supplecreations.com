import React from 'react';
import {
  BrowserRouter,
  // HashRouter,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';
import articleData from './constants/articleData';
import ScrollHelper from './components/ScrollHelper';
import MultiMedia from './components/MultiMedia';
import Header from './components/Header';
import Page from './components/Page';
import Home from './pages/Home';
import About from './pages/About';
import FourOhFour from './pages/FourOhFour';

function App(): JSX.Element {
  // const RouterComponent = __DEV__ ? BrowserRouter : HashRouter;
  const RouterComponent = BrowserRouter;

  return (
    <div className="App">
        <RouterComponent basename="/">
          <Header />
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
