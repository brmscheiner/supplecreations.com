import React from 'react';

import articleData from '../constants/articleData';
import Preview from './Preview';

function Home(): JSX.Element {

  return (
    <div className="App">
      {articleData.map(article => (
        <Preview
          key={article.title}
          title={article.title}
          subtitle={article.title}
          imageSrc={article.heroImageSrc}
          imageAlt={article.heroImageAlt}
          href={`/articles/${article.href}`}
        />
      ))}
    </div>
  );
}

export default Home;
