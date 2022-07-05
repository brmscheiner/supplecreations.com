import { MediaElement } from '../types';
import coastlines from './articles/coastlines/coastlines';
import zebraRelease from './articles/zebra-release/zebraRelease';
import portugal from './articles/portugal/portugal';
import boards from './articles/boards/boards';
import nook from './articles/nook/nook';

interface ArticleTypes {
  title: string,
  subtitle: string,
  cta: string,
  date: string,
  href: string,
  content: MediaElement[],
}

const articleData: ArticleTypes[] = [
  {
    title: 'Family diagrams',
    subtitle: 'A collection of photos I took in Portugal',
    cta: 'View gallery',
    date: 'July 2, 2022',
    href: 'coastlines',
    content: coastlines,
  },
  {
    title: 'Zebra Codex released',
    subtitle: 'I work for a non-profit that ',
    cta: 'View gallery',
    date: 'July 2, 2022',
    href: 'zebra',
    content: zebraRelease,
  },
  {
    title: 'Portugal',
    subtitle: 'A collection of photos I took in Portugal',
    cta: 'View gallery',
    date: 'July 2, 2022',
    href: 'portugal',
    content: portugal,
  },
  {
    title: 'Holiday charcuterie boards',
    subtitle: 'I built a bunch of charcuterie boards from black walnut to give away for Christmas.',
    cta: 'See more',
    date: 'December 29, 2021',
    href: 'boards',
    content: boards,
  },
  {
    title: 'Nook',
    subtitle: 'We added a kitchen nook to our house by sawing a church pew in half and building a teak table.',
    cta: 'See more',
    date: 'July 2, 2022',
    href: 'nook',
    content: nook,
  },
  {
    title: 'Coastlines',
    subtitle: 'A series of photos I took on the Oregon coast between 2015 and 2018.',
    cta: 'View gallery',
    date: 'July 2, 2022',
    href: 'coastlines',
    content: coastlines,
  },
]

export default articleData;