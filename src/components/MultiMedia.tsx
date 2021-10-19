import React from 'react';
import { get } from 'lodash-es';
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
        console.log(datum);
        if (!datum) return null;
        if (typeof datum === 'string') {
          return <span key={datum}>{datum}</span>;
        } else {
          return <LoadableImage key={get(datum, ['image', 'src'])} width={columnWidth} imageObject={get(datum, 'image', '')} alt={datum.alt} />
        }
      })}
    </div>
  )
}

export default MultiMedia;
