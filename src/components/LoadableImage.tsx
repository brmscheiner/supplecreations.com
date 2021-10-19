import React, { useState } from 'react';
import { get } from 'lodash-es';
import { SizeofLoaderObject } from '../types';

interface LoadableImageProps {
  imageObject: SizeofLoaderObject;
  width?: number;
  height?: number;
  alt?: string;
}

function LoadableImage(props: LoadableImageProps): JSX.Element {
  const { width, height, alt, imageObject, ...rest } = props;

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


  return <div style={{ width: renderWidth, height: renderHeight, position: 'relative', background: 'rbga(0, 0, 0, 0.14)' }}>
    {loading && (
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 300,
          height: 300,
          backgroundColor: 'red',
        }}
      />
    )}
    <img alt={alt} src={get(imageObject, 'src', '')} onLoad={() => setLoading(false)} style={{ width: '100%'}} {...rest} />
  </div>
}

export default LoadableImage;
