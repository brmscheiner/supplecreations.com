import React from 'react';
import { Link } from 'react-router-dom';
import LoadableImage from './LoadableImage';

interface PreviewTypes {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  href: string,
}

const columnWidth = 500;

function Preview(props: PreviewTypes): JSX.Element {
  const { title, subtitle, imageSrc, imageAlt, href } = props;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '0 auto', maxWidth: columnWidth }}>
      <Link to={href}>{title}</Link>
      <span>{subtitle}</span>
      <LoadableImage src={imageSrc} alt={imageAlt} width={columnWidth} />
    </div>
  )
}

export default Preview;