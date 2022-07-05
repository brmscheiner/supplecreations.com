import React from 'react';
import { get } from 'lodash-es';
import { MediaElement } from '../types';
import mediaTypes from '../constants/mediaTypes';
import LoadableImage from '../components/LoadableImage';

interface MultiMediaTypes {
  data: MediaElement[];
}

function MultiMedia(props: MultiMediaTypes): JSX.Element {
  const { data } = props;

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {data.map(datum => {
        if (!datum) return null;
        if (datum.mediaType === mediaTypes.text) {
          return <p key={datum.text}>{datum.text}</p>;
        } else {
          return <LoadableImage width={500} key={get(datum, ['image', 'src'])} imageObject={get(datum, 'image', '')} alt={datum.alt} />
        }
      })}
    </div>
  )
}

export default MultiMedia;
