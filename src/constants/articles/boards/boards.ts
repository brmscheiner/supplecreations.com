import mediaTypes from '../../mediaTypes';
import b1 from './b1.jpeg';
import b2 from './b2.jpeg';
import b3 from './b3.jpeg';
import all_boards from './all_boards.jpeg';

const nookData = [
  {
    mediaType: mediaTypes.image,
    image: all_boards,
    alt: '5 charcuterie boards',
  },
  {
    mediaType: mediaTypes.text,
    text: 'I had the idea to batch out some charcuterie boards for the holidays this year. This turned out to be a great beginner woodworking project and I love how they turned out.',
  },
  {
    mediaType: mediaTypes.image,
    image: b1,
    alt: 'Close up of a charcuterie board',
  },
  {
    mediaType: mediaTypes.text,
    text: 'All of the wood came from the shorts bins at Goby Walnut, so as far as walnut is concerned this project was quite affordable. The cost of materials for each board was probably only $5 or $10.',
  },
  {
    mediaType: mediaTypes.image,
    image: b2,
    alt: 'Close up of a charcuterie board',
  },
  {
    mediaType: mediaTypes.text,
    text: 'I finished the boards with a tung oil product, which looks great and is food safe if given sufficient time to cure. But next time I think I would get an even better result with Odies Oil.',
  },
  {
    mediaType: mediaTypes.image,
    image: b3,
    alt: 'Close up of a whale-shaped charcuterie board',
  },
  {
    mediaType: mediaTypes.text,
    text: 'I enjoyed making the whale and egret-shaped boards a lot. Definitely thinking about what animal to do next...',
  },
];

export default nookData;