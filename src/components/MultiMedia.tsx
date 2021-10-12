import React from 'react';
import { MediaElement } from '../types';
import LoadableImage from '../components/LoadableImage';

interface MultiMediaTypes {
  data: MediaElement[];
}

const columnWidth = 500;

function MultiMedia(props: MultiMediaTypes): JSX.Element {
  const { data } = props;

  return (
    <div style={{ width: columnWidth, display: 'flex', flexDirection: 'column', margin: '0 auto' }}>
      {data.map(datum => {
        if (typeof datum === 'string') {
          return <span key={datum}>{datum}</span>;
        } else {
          return <LoadableImage key={datum.imageSrc} width={columnWidth} src={datum.imageSrc} alt={datum.imageAlt} />
        }
      })}
    </div>
  )
}

export default MultiMedia;
