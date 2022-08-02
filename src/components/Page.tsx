import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Title from './Title';

interface PageProps {
  title: string,
  showTitle?: boolean,
  children: React.ReactNode,
}

function Page(props: PageProps): JSX.Element {
  const { children, title, showTitle = true } = props;
  useDocumentTitle(title, true);
  return <div style={{ margin: '40px 16px 100px 16px', maxWidth: 600 }}>
    {showTitle && <Title>{title}</Title>}
    {children}
  </div>;
}

export default Page;
