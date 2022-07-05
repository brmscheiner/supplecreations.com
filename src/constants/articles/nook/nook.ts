import mediaTypes from '../../mediaTypes';
import nook from './nook.jpeg';
import table from './table.jpeg';

const nookData = [
  {
    mediaType: mediaTypes.image,
    image: table,
    alt: 'Zebra Codex screenshot',
  },
  {
    mediaType: mediaTypes.text,
    text: 'The non-profit',
  },
  {
    mediaType: mediaTypes.image,
    image: nook,
    alt: 'Zebra art',
  },
];

export default nookData;