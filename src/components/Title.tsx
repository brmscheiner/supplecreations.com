import React from 'react';

interface TitleProps {
  children: React.ReactNode;
}

function Title(props: TitleProps): JSX.Element {
  const { children } = props;
  return (
    <span style={{ fontWeight: 700, fontSize: '1.7em' }}>
      {children}
    </span>
  )
}

export default Title;
