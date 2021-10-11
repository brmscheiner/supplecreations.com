import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

interface PageProps {
  title: string,
  children: React.ReactNode,
}

function Page(props: PageProps): JSX.Element {
  const { children, title } = props;
  useDocumentTitle(title, true);
  return <div>
    {children}
  </div>;
}

export default Page;
