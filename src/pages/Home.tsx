import React from 'react';

import articleData from '../constants/articleData';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Preview from '../components/Preview';

function Home(): JSX.Element {
  useDocumentTitle('Home', true);

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
