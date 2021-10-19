import { MediaElement } from '../types';
import coastlines from './articles/coastlines/coastlines';
import coastlinesHero from './articles/coastlines/coastlines_landscape.jpg'
// import squigglesHero from './articles/squirrels/squirrels_landscape.jpg';
import cuba from './articles/cuba/cuba';
import cubaHero from './articles/cuba/cuba_landscape.jpg';
import { SizeofLoaderObject } from '../types';

// console.log(coastlinesHero);
// console.log(coastlinesHero.width);
// console.log(coastlinesHero.height);

interface ArticleTypes {
  title: string,
  subtitle: string,
  href: string,
  heroImage: SizeofLoaderObject,
  heroImageAlt: string,
  content: MediaElement[],
}

const articleData: ArticleTypes[] = [
  {
    title: 'Coastlines',
    subtitle: 'Looking closely at the Oregon coast',
    href: 'coastlines',
    heroImage: coastlinesHero,
    heroImageAlt: 'Black and white sand',
    content: coastlines,
  },
  {
    title: 'Fostering squirrels',
    subtitle: 'Living with Penelope and Squiggles',
    href: 'squiggles',
    heroImage: coastlinesHero,
    heroImageAlt: "Squirrel perched on a man's hand",
    content: coastlines,
  },
  {
    title: 'Support for the Cuban people',
    subtitle: 'Yes, you can go to Cuba. If you know the magic words...',
    href: 'cuba',
    heroImage: cubaHero,
    heroImageAlt: 'suuup', 
    content: cuba,
  },
]

export default articleData;