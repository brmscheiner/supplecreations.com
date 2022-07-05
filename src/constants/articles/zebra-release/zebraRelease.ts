import mediaTypes from '../../mediaTypes';
import image1 from './cool_zebra.png';
import image2 from './zebra_screenshot.png';

const zebraRelease = [
  {
    mediaType: mediaTypes.image,
    image: image1,
    alt: 'Zebra art',
  },
  {
    mediaType: mediaTypes.text,
    text: 'The non-profit',
  },
  {
    mediaType: mediaTypes.image,
    image: image2,
    alt: 'Zebra Codex screenshot',
  },
];

export default zebraRelease;