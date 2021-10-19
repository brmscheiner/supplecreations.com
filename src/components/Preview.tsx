import React from 'react';
import { Link } from 'react-router-dom';
import LoadableImage from './LoadableImage';
import { SizeofLoaderObject } from '../types';

interface PreviewTypes {
  title: string;
  subtitle: string;
  imageObject: SizeofLoaderObject;
  imageAlt: string;
  href: string,
}

const columnWidth = 500;

function Preview(props: PreviewTypes): JSX.Element {
  const { title, subtitle, imageObject, imageAlt, href } = props;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '0 auto', maxWidth: columnWidth }}>
      <Link to={href}>{title}</Link>
      <span>{subtitle}</span>
      <LoadableImage imageObject={imageObject} alt={imageAlt} width={columnWidth} />
    </div>
  )
}

export default Preview;