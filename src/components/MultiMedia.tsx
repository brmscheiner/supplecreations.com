import React from 'react';
import { MediaElement } from '../types';

interface MultiMediaTypes {
  data: MediaElement[];
}

function MultiMedia(props: MultiMediaTypes): JSX.Element {
  const { data } = props;

  return (
    <div>
      {data.map(datum => {
        if (typeof datum === 'string') {
          return <span key={datum}>{datum}</span>;
        } else {
          return <img key={datum.imageSrc} src={datum.imageSrc} alt={datum.imageAlt} />
        }
      })}
    </div>
  )
}

export default MultiMedia;