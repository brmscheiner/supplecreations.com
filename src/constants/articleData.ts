import { MediaElement } from '../types';
import coastlines from './articles/coastlines';

interface ArticleTypes {
  title: string,
  subtitle: string,
  href: string,
  heroImageSrc: string,
  heroImageAlt: string,
  content: MediaElement[],
}

const articleData: ArticleTypes[] = [
  {
    title: 'Coastlines',
    subtitle: 'Created today',
    href: 'coastlines',
    heroImageSrc: 'hiii',
    heroImageAlt: 'suuup', 
    content: coastlines,
  },
  {
    title: 'New site',
    subtitle: 'Created today',
    href: 'newstuff',
    heroImageSrc: 'hiii',
    heroImageAlt: 'suuup', 
    content: coastlines,
  },
]

export default articleData;