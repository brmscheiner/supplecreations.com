import React, { useState } from 'react';

// would love to use this interface but TS gives me errors 
// when i try to give src props if i dont...

// interface SizeofLoaderImage {
//   width: number;
//   height: number;
//   src: string;
// }

interface LoadableImageProps {
  src: any;
  width?: number;
  height?: number;
  alt?: string;
}

function LoadableImage(props: LoadableImageProps): JSX.Element {
  const { width, height, src, alt, ...rest } = props;

  const [loading, setLoading] = useState(true);

  let renderWidth;
  let renderHeight;
  if (width && height) {
    renderWidth = width;
    renderHeight = height;
  } else if (width) {
    renderWidth = width;
    renderHeight = width * src.height / src.width;
  } else if (height) {
    renderWidth = height * src.width / src.height;
    renderHeight = height;
  } else {
    renderWidth = src.width;
    renderHeight = src.height;
  }


  return <div style={{ width: renderWidth, height: renderHeight, position: 'relative', background: 'rbga(0, 0, 0, 0.14)' }}>
    {loading && <div style={{ position: 'absolute', top: '50%', left: '50%', width: 300, height: 300, backgroundColor: 'red' }} />}
    <img alt={alt} src={src.src} onLoad={() => setLoading(true)} style={{ width: '100%'}} {...rest} />
  </div>
}

export default LoadableImage;
