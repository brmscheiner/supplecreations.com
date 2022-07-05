import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

interface PageProps {
  title: string,
  showTitle?: boolean,
  children: React.ReactNode,
}

function Page(props: PageProps): JSX.Element {
  const { children, title, showTitle = true } = props;
  useDocumentTitle(title, true);
  return <div className="main">
    {showTitle && <p className="title">{title}</p>}
    {children}
  </div>;
}

export default Page;
