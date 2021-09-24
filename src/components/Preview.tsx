import React from 'react';
import { Link } from 'react-router-dom';

interface PreviewTypes {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  href: string,
}

function Preview(props: PreviewTypes): JSX.Element {
  const { title, subtitle, imageSrc, imageAlt, href } = props;

  return (
    <div>
      <Link to={href}>{title}</Link>
      <span>{subtitle}</span>
      <img src={imageSrc} alt={imageAlt} />
    </div>
  )
}

export default Preview;