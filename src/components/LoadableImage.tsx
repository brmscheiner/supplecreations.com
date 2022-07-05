import React, { useState } from 'react';
import { get } from 'lodash-es';
import { SizeofLoaderObject } from '../types';

interface LoadableImageProps {
  imageObject: SizeofLoaderObject;
  width?: number;
  height?: number;
  alt?: string;
  style?: React.CSSProperties;
}

function LoadableImage(props: LoadableImageProps): JSX.Element {
  const { width, height, alt, style = {}, imageObject, ...rest } = props;

  const [loading, setLoading] = useState(true);

  let renderWidth;
  let renderHeight;
  if (width && height) {
    renderWidth = width;
    renderHeight = height;
  } else if (width) {
    renderWidth = width;
    renderHeight = width * get(imageObject, 'height', NaN) / get(imageObject, 'width', NaN);
  } else if (height) {
    renderWidth = height * get(imageObject, 'width', NaN) / get(imageObject, 'height', NaN);
    renderHeight = height;
  } else {
    renderWidth = get(imageObject, 'width', undefined);
    renderHeight = get(imageObject, 'height', undefined);
  }

  return <div style={{ width: renderWidth, height: renderHeight, ...style }}>
    {loading && (
      <div
        className="loading-gradient"
        style={{
          width: renderWidth,
          height: renderHeight,
          display: 'block',
          ...style,
        }}
      />
    )}
    <img alt={alt} src={get(imageObject, 'src', '')} onLoad={() => setLoading(false)} style={{ width: '100%', display: 'block' }} {...rest} />
  </div>
}

export default LoadableImage;
