import mediaTypes from '../../mediaTypes';
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';
import image5 from './5.jpg';

const cuba = [
  {
    mediaType: mediaTypes.text,
    text: 'Colleen and I had the pleasure of spending two weeks in Cuba. The country is spectacularly beautiful and full of kind, generous people who are strangely obsessed with ham and cheese sandwiches. Cocktails, sunsets. Food was weird.',
  },
  {
    mediaType: mediaTypes.image,
    image: image1,
    alt: 'Horse & buggy in Viñales',
  },
  {
    mediaType: mediaTypes.text,
    text: 'Horse & buggy in our favorite city, Viñales',
  },
  {
    mediaType: mediaTypes.image,
    image: image2,
    alt: 'Sunset',
  },
  {
    mediaType: mediaTypes.text,
    text: 'Sunset on Cato Jutias',
  },
  {
    mediaType: mediaTypes.image,
    image: image3,
    alt: 'Sunset',
  },
  {
    mediaType: mediaTypes.image,
    image: image4,
    alt: 'Road at dusk',
  },
  {
    mediaType: mediaTypes.text,
    text: 'Dusk in the Valle del Silencio',
  },
  {
    mediaType: mediaTypes.image,
    image: image5,
    alt: 'Dusk',
  },
];

export default cuba;