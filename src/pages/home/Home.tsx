import React from 'react';

import articleData from '../../constants/articleData';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Page from '../../components/Page';
import Preview from '../../components/Preview';

function Home(): JSX.Element {
  useDocumentTitle('Home', true);

  return (
    <Page title="Home" showTitle={false}>
      {articleData.map(article => (
        <Preview
          key={article.title}
          title={article.title}
          subtitle={article.subtitle}
          date={article.date}
          href={`/articles/${article.href}`}
        />
      ))}
    </Page>
  );
}

export default Home;
