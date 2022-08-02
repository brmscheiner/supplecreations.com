import React from 'react';
import { Link } from 'react-router-dom';
import LoadableImage from './LoadableImage';
import { SizeofLoaderObject } from '../types';

interface PreviewTypes {
  title: string;
  subtitle: string;
  date: string;
  href: string,
}

const columnWidth = 500;

function Preview(props: PreviewTypes): JSX.Element {
  const { title, subtitle, date, href } = props;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: columnWidth, marginBottom: 40 }}>
      <span style={{ fontWeight: 600, fontSize: '1.3em' }}>{title}</span>
      <span style={{ fontWeight: 300, fontSize: '1em', marginTop: -4 }}>{date}</span>
      <span style={{ marginTop: 4 }}>{subtitle}</span>
      <Link to={href}>View gallery</Link>
      {/* <LoadableImage imageObject={imageObject} alt={imageAlt} width={columnWidth} /> */}
    </div>
  )
}

export default Preview;