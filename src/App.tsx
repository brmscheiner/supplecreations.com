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
import Home from './components/Home';

function App(): JSX.Element {
  // const RouterComponent = __DEV__ ? BrowserRouter : HashRouter;
  const RouterComponent = BrowserRouter;

  return (
    <div className="App">
      <header className="App-header">
        <RouterComponent basename="/">
          <ScrollHelper />
          <Switch>
            {articleData.map(article => (
              <Route key={article.title} path={`/articles/${article.href}`}>
                <MultiMedia data={article.content} />
              </Route>
            ))}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </RouterComponent>
      </header>
    </div>
  );
}

export default App;
